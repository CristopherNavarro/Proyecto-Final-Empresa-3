# Plan de Direccionamiento IP y Subneteo VLSM — SERVIDOM S.A. (Empresa 3)
**Asignatura:** Conmutación y Enrutamiento (TI-203) — ITLA  
**Docente:** Prof. Onel Luis Pelegrino  
**Bloque Privado Asignado:** `192.168.0.0/16`  
**Bloque Público Asignado:** `19.0.0.0/24`  
**Crecimiento Proyectado:** 40% en 5 años  

---

## 1. Metodología de Subneteo VLSM y Proyección a 5 Años

Para dimensionar de forma precisa cada departamento y sucursal, se aplica la fórmula de crecimiento proyectado sobre la cantidad base de hosts requerida:
$$\\text{Hosts Requeridos} = \\lceil \\text{Hosts Base} \\times 1.40 \\rceil$$

La cantidad de direcciones IP utilizables por bloque viene dada por $2^{(32 - \\text{prefijo})} - 2$, garantizando que la máscara asignada contenga holgura suficiente sin desperdiciar espacio de direccionamiento.

### Resumen de Dimensionamiento por Sede

| Sede | Departamento / Función | Hosts Base | Proyección (+40%) | Prefijo Asignado | Hosts Utilizables | Red Asignada |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Santo Domingo** | Depto. 1 (Comercial / Ventas) | 110 | **154** | `/24` | 254 | `192.168.0.0/24` |
| **Santo Domingo** | Depto. 2 (Recursos Humanos) | 51 | **72** | `/25` | 126 | `192.168.1.0/25` |
| **Santo Domingo** | Depto. 3 (Operaciones) | 64 | **90** | `/25` | 126 | `192.168.1.128/25` |
| **Santo Domingo** | Depto. 4 (Finanzas & Legal) | 80 | **112** | `/25` | 126 | `192.168.2.0/25` |
| **Santo Domingo** | Gestión & Administración (VLAN 99) | — | **10** | `/28` | 14 | `192.168.3.0/28` |
| **Santiago** | Centro de Datos (Servidores Internos) | 10 | **14** | `/28` | 14 | `192.168.10.0/28` |
| **Santiago** | Administración Cibao | 5 | **7** | `/28` | 14 | `192.168.10.16/28` |
| **Santiago** | Ventas Cibao | 15 | **21** | `/27` | 30 | `192.168.10.32/27` |
| **Santiago** | Servidores Corporativos (VLAN 40) | 4 | **6** | `/28` | 14 | `192.168.10.64/28` |
| **La Romana** | Depto. 1 (Call Center Inbound) *(Corregido)* | 25 | **35** | `/26` | 62 | `192.168.20.0/26` |
| **La Romana** | Depto. 3 (Estadística & Calidad) | 7 | **10** | `/28` | 14 | `192.168.20.64/28` |
| **La Romana** | Depto. 2 (Televentas & CRM) | 52 | **73** | `/25` | 126 | `192.168.20.128/25` |

> [!IMPORTANT]
> **Nota de Corrección de Auditoría:** En el cálculo original, La Romana Depto. 1 (25 hosts $\\rightarrow$ 35 hosts) tenía asignada una máscara `/27` (30 hosts). Dado que $35 > 30$, se ajustó a una máscara `/26` (hasta 62 hosts) y se reubicó Depto. 3 en `192.168.20.64/28`, eliminando todo solapamiento.

---

## 2. Tabla Detallada de Subredes LAN y Gateways

### 2.1 Sede Central — Santo Domingo (Área 1 OSPF)
En Santo Domingo opera redundancia de Primer Salto (FHRP) con **VRRP v2**:
- **VRRP Virtual Gateway:** `.1` (Dirección compartida)
- **SW3 (Distribución 1 - Maestro, Prioridad 120):** `.2`
- **SW4 (Distribución 2 - Respaldo, Prioridad 100):** `.3`

| VLAN | Nombre / Departamento | Subred | Máscara | Rango Utilizable | Gateway Virtual (VRRP) | IP SW3 (Maestro) | IP SW4 (Respaldo) |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: | :---: |
| **10** | Depto. 1 (Comercial) | `192.168.0.0` | `255.255.255.0` (/24) | `192.168.0.10` - `192.168.0.254` | `192.168.0.1` | `192.168.0.2` | `192.168.0.3` |
| **20** | Depto. 2 (RR.HH.) | `192.168.1.0` | `255.255.255.128` (/25) | `192.168.1.10` - `192.168.1.126` | `192.168.1.1` | `192.168.1.2` | `192.168.1.3` |
| **30** | Depto. 3 (Operaciones) | `192.168.1.128` | `255.255.255.128` (/25) | `192.168.1.138` - `192.168.1.254` | `192.168.1.129` | `192.168.1.130` | `192.168.1.131` |
| **40** | Depto. 4 (Finanzas) | `192.168.2.0` | `255.255.255.128` (/25) | `192.168.2.10` - `192.168.2.126` | `192.168.2.1` | `192.168.2.2` | `192.168.2.3` |
| **99** | Gestión de Switches | `192.168.3.0` | `255.255.255.240` (/28) | `192.168.3.4` - `192.168.3.14` | `192.168.3.1` | `192.168.3.2` | `192.168.3.3` |

### 2.2 Sede Santiago (Área 2 OSPF)
En Santiago, el switch multicapa **SW10** funge como Gateway L3 de las VLANs de usuario y servidores:

| VLAN | Nombre / Departamento | Subred | Máscara | Rango Asignable DHCP | Gateway (SW10) | Servidor DNS/NTP |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **10** | Centro de Datos (LAN) | `192.168.10.0` | `255.255.255.240` (/28) | `192.168.10.3` - `192.168.10.14` | `192.168.10.1` | `192.168.10.66` |
| **30** | Administración Cibao | `192.168.10.16` | `255.255.255.240` (/28) | `192.168.10.19` - `192.168.10.30` | `192.168.10.17` | `192.168.10.66` |
| **20** | Ventas Cibao | `192.168.10.32` | `255.255.255.224` (/27) | `192.168.10.36` - `192.168.10.62` | `192.168.10.33` | `192.168.10.66` |
| **40** | Servidores Corporativos | `192.168.10.64` | `255.255.255.240` (/28) | `192.168.10.66` - `192.168.10.78` | `192.168.10.65` | `192.168.10.66` |

#### Direccionamiento Fijo de Servidores en Santiago (VLAN 40)
- **SERVER 1 (DNS / WEB / DHCP):** `192.168.10.66/28` (`www.servidom.com.do`)
- **SERVER 2 (MAIL Corporativo):** `192.168.10.67/28` (`mail.servidom.com.do`)
- **SERVER 3 (FTP / RADIUS / NFS):** `192.168.10.68/28` (`radius.servidom.com.do`)
- **SERVER 4 (WEB SERVER Externo en Nube):** `19.0.0.10/24`

### 2.3 Sede La Romana (Área 3 OSPF)
En La Romana, el router **R12** actúa como Servidor DHCP Central, mientras que **SW8** realiza el reenvío mediante DHCP Relay:

| VLAN | Nombre / Departamento | Subred | Máscara | Rango Asignable DHCP | Gateway (SW8) | Servidor DHCP Relay |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **10** | Depto. 1 (Call Center Inbound) | `192.168.20.0` | `255.255.255.192` (/26) | `192.168.20.6` - `192.168.20.62` | `192.168.20.1` | `192.168.254.2` (R12) |
| **30** | Depto. 3 (Estadística) | `192.168.20.64` | `255.255.255.240` (/28) | `192.168.20.67` - `192.168.20.78` | `192.168.20.65` | `192.168.254.2` (R12) |
| **20** | Depto. 2 (Televentas) | `192.168.20.128` | `255.255.255.128` (/25) | `192.168.20.136` - `192.168.20.254` | `192.168.20.129` | `192.168.254.2` (R12) |

---

## 3. Direccionamiento Punto a Punto WAN y Tránsito NUBE

### 3.1 Red de Tránsito Backbone (NUBE / Área 0 OSPF) — `192.168.254.0/29`
| Dispositivo | Interfaz | Dirección IP | Máscara | Función |
| :--- | :--- | :--- | :--- | :--- |
| **R11-Core (Santo Domingo)** | `GigabitEthernet0/0/2` | `192.168.254.1` | `255.255.255.248` (/29) | Conexión a NUBE Área 0 / Hub IPsec |
| **R12-Romana (La Romana)** | `GigabitEthernet0/0/0` | `192.168.254.2` | `255.255.255.248` (/29) | Conexión a NUBE Área 0 / Spoke IPsec |
| **SW10 (Santiago)** | `Vlanif254 (GE1/0/0)` | `192.168.254.3` | `255.255.255.248` (/29) | Conexión a NUBE Área 0 |

### 3.2 Enlaces Punto a Punto Internos (/30)
| Enlace / Tramo | Subred | Extremo A (IP) | Extremo B (IP) | Área OSPF |
| :--- | :--- | :--- | :--- | :---: |
| **R11-Core <-> SW3 (Distribución 1)** | `192.168.254.8/30` | R11 `GE0/0/1` (`192.168.254.9`) | SW3 `GE0/0/1` (`192.168.254.10`) | Área 1 |
| **R11-Core <-> SW4 (Distribución 2)** | `192.168.254.12/30` | R11 `GE0/0/0` (`192.168.254.13`) | SW4 `GE0/0/0` (`192.168.254.14`) | Área 1 |
| **R12-Romana <-> SW8 (Distribución L3)** | `192.168.254.16/30` | R12 `GE0/0/1` (`192.168.254.17`) | SW8 `GE0/0/0` (`192.168.254.18`) | Área 3 |

### 3.3 Direcciones Loopback (Router-ID)
| Dispositivo | Interfaz Loopback | Dirección IP | Propósito |
| :--- | :--- | :--- | :--- |
| **R11-Core** | `LoopBack0` | `192.168.255.1/32` | Router-ID OSPF & Identificador Core |
| **R12-Romana** | `LoopBack0` | `192.168.255.2/32` | Router-ID OSPF & Identificador Romana |
| **SW10-Santiago** | `LoopBack0` | `192.168.255.3/32` | Router-ID OSPF & Identificador Santiago |

---

## 4. Direccionamiento Público y Salida NAT (`19.0.0.0/24`)

| Dispositivo / Servicio | Interfaz | Dirección IP Pública | Función |
| :--- | :--- | :--- | :--- |
| **R11-Core (WAN Internet)** | `GigabitEthernet0/0/3` | `19.0.0.1/30` | Salida a Internet Corporativa con NAT Overload (NAPT) |
| **Gateway ISP (Proveedor)** | Interfaz ISP | `19.0.0.2/30` | Próximo salto hacia la red pública global |
| **Servidor Web Público** | `eth1` (SERVER 4) | `19.0.0.10/24` | Portal Web Público en red de pruebas |
