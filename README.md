# 🌐 SERVIDOM S.A. — Infraestructura de Red Corporativa (Empresa 3)
### *Dominicana de Servicios & Comercio Electrónico S.A.*
**Asignatura:** Conmutación y Enrutamiento (TI-203) — **Instituto Tecnológico de Las Américas (ITLA)**  
**Docente:** Prof. Onel Luis Pelegrino  
**Cliente Consultor:** CECOMPE (Centro de Cómputos Pelegrino)  
**Repositorio Oficial:** [`https://github.com/CristopherNavarro/Proyecto-Final-Empresa-3`](https://github.com/CristopherNavarro/Proyecto-Final-Empresa-3)  

---

## 📢 NOTA ACLARATORIA FORMAL PARA EL DOCENTE

> ### 🔴 Consideraciones Técnicas sobre la Implementación y Evaluación
> 
> 1. **ÚNICO EQUIPO EN TECNOLOGÍA HUAWEI ENTERPRISE:**  
>    Nuestro equipo de ingeniería asumió con rigor el desafío de ser el **único grupo en diseñar, configurar y validar el 100% de la infraestructura sobre tecnología Huawei Enterprise (VRP)** en el emulador PNetLab. Implementamos Routers AR6120 y Switches CloudEngine S5735 L3/L2, configurando de forma nativa **VRRP v2, RSTP con BPDU Protection, Agregación LACP (Eth-Trunk), OSPF Multiárea con autenticación criptográfica MD5, túnel dinámico VPN IPsec (IKEv1 AES-256 / SHA2-256), DHCP Snooping, Dynamic ARP Inspection (DAI) y Port Security Sticky**.
> 
> 2. **INCONVENIENTE TÉCNICO CON LA EXPORTACIÓN DEL ARCHIVO `.unl` EN PNETLAB:**  
>    Tal como se expuso y debatió en las sesiones presenciales de clase, el emulador PNetLab / EVE-NG presenta una particularidad en la exportación de archivos `.unl`: **el archivo XML generado (`.unl`) exporta la topología gráfica, los nodos y las conexiones virtuales, pero la memoria NVRAM (`startup-config` / `vrpcfg.zip`) de las imágenes de dispositivos Huawei se gestiona en el almacenamiento temporal del host de virtualización**.
> 
> 3. **MÉTODOS DE EVALUACIÓN Y VALIDACIÓN RÁPIDA DISPONIBLES PARA EL DOCENTE:**
>    * **Opción A (Revisión Rápida de Código):** Puede consultar directamente el archivo consolidado [`scripts/Empresa3_Huawei_Master_Scripts.txt`](scripts/Empresa3_Huawei_Master_Scripts.txt) o los archivos modulares en [`configs/`](configs/) para verificar la sintaxis, direccionamiento, parámetros de seguridad y lógica de enrutamiento.
>    * **Opción B (Carga y Replicación Interactiva en PNetLab):** Puede importar el archivo de topología oficial [`diagrams/LABORATORIO SIMULADO.unl`](diagrams/LABORATORIO%20SIMULADO.unl), encender los nodos y copiar/pegar los bloques de configuración de cada equipo para observar la convergencia completa en vivo (OSPF Full, VRRP Master/Backup, RSTP Root, Eth-Trunk LACP, IPsec VPN y DHCP Relay).
>    * **Opción C (Dossier Documental en PDF):** Toda la memoria técnica, cálculos VLSM (+40%), organigrama, fichas técnicas y presupuesto formal están disponibles en la carpeta [`docs/`](docs/).

---

## 👥 Equipo de Ingeniería y Nómina Oficial

| Integrante | Matrícula | Rol Corporativo | Responsabilidad Técnica Principal |
| :--- | :---: | :--- | :--- |
| **Cristopher Navarro** | `2025-0720` | Director General de TI & Web | Arquitectura Web, Branding e Identidad Institucional |
| **Justin Luciano** | `2025-0054` | Coord. Servicios Digitales & Finanzas | Plataforma Comercial, Portal Call Center y Presupuesto Oficial |
| **Sayid Cabral** | `2025-1364` | Ing. Infraestructura & CECOMPE Liaison | Requerimientos CECOMPE y Justificación Huawei Enterprise |
| **Gregory Morel** | `2025-0035` | Especialista en Conmutación LAN | Sede Santo Domingo (VRRP Maestro/Respaldo, RSTP, Eth-Trunk) |
| **Yadhier López** | `2025-1365` | Administrador de DataCenter & Linux | Sede Santiago (Centro de Datos, Servidores DNS/Web/RADIUS/Mail) |
| **Enmanuel Mendez** | `2025-0753` | Especialista en Redes WAN & VPN | Sede La Romana (Router R12, DHCP Central, Túnel VPN IPsec) |

---

## 💻 Plataforma Web Corporativa & Servicios en Línea (`/web`)

Desarrollamos el portal web corporativo interactivo de **SERVIDOM S.A.** bajo el dominio institucional `www.servidom.com.do` (alojado en la IP `192.168.10.66` de la sede Santiago):

- **Catálogo de Servicios y Comercio Electrónico:** Venta de soluciones digitales y servicios directos con pasarela simulada.
- **Módulo de Call Center Interactivo:** Simulador de chat en vivo conectado a la sucursal de La Romana.
- **Cotizador Dinámico en Línea:** Cálculo interactivo de presupuestos según el nivel de SLA (Standard, Gold, Platinum).
- **Portal Intranet Centralizado con Autenticación AAA:** Validado contra el servidor **FreeRADIUS** con cuentas creadas para los 6 ingenieros del equipo.
- **Visualizador de Uniformes y Credenciales:** [`branding/uniformes-corporativos.html`](branding/uniformes-corporativos.html) con carnets oficiales y código QR.

---

## 📄 Dossier Documental Oficial en Formato PDF

Todos los documentos técnicos del proyecto están disponibles en formato PDF profesional de alta definición:

| Documento Oficial | Formato PDF | Formato Markdown | Descripción Técnica |
| :--- | :---: | :---: | :--- |
| **Dossier Completo del Proyecto** | [📥 **Descargar PDF**](PROYECTO_FINAL_EMPRESA_3_OFICIAL.pdf) | — | Memoria técnica completa de 9 páginas con todas las secciones integradas. |
| **Nota Aclaratoria al Docente** | [📥 **Descargar PDF**](docs/NOTA_ACLARATORIA_DOCENTE.pdf) | [Ver MD](docs/nota-aclaratoria-docente.md) | Comunicación formal explicando la tecnología Huawei y el caso del archivo `.unl`. |
| **Plan de Direccionamiento VLSM** | [📥 **Descargar PDF**](docs/DIRECCIONAMIENTO_IP_VLSM.pdf) | [Ver MD](docs/direccionamiento-ip.md) | Tablas de subneteo auditadas con +40% de crecimiento a 5 años. |
| **Fichas Técnicas de Equipos** | [📥 **Descargar PDF**](docs/FICHA_TECNICA_EQUIPOS.pdf) | [Ver MD](docs/equipos.md) | Especificaciones Huawei AR6120, CloudEngine S5735 y comparativa vs Cisco. |
| **Organigrama y Perfiles TI** | [📥 **Descargar PDF**](docs/ORGANIGRAMA_Y_EQUIPO.pdf) | [Ver MD](docs/organigrama.md) | Estructura organizacional y funciones de los 6 ingenieros del equipo. |
| **Cotización Formal del Proyecto** | [📥 **Descargar PDF**](docs/COTIZACION_FORMAL.pdf) | [Ver MD](docs/cotizacion.md) | Presupuesto detallado en USD ($74,812.00) y DOP (RD$ 4,488,720.00). |
| **Políticas de Seguridad L2/L3** | [📥 **Descargar PDF**](docs/POLITICAS_DE_SEGURIDAD.pdf) | [Ver MD](docs/seguridad-politicas.md) | Matriz de mitigación: Port Security, DHCP Snooping, DAI, BPDU Protection y VPN. |
| **Manual de Identidad y Marca** | [📥 **Descargar PDF**](branding/MANUAL_DE_IDENTIDAD.pdf) | [Ver MD](branding/manual-identidad.md) | Misión, visión, valores, código de vestimenta, isotipo y uniformes. |

---

## 🗺️ Diagrama de Topología Lógica y Áreas OSPF

```text
                               ┌──────────────────────────────────────────────┐
                               │             NUBE / WAN TRANSIT               │
                               │              (Área 0 OSPF)                   │
                               │             192.168.254.0/29                 │
                               └───────┬──────────────┬──────────────┬────────┘
                                       │              │              │
              ┌────────────────────────┘              │              └────────────────────────┐
              │                                       │                                       │
    ┌─────────┴─────────┐                   ┌─────────┴─────────┐                   ┌─────────┴─────────┐
    │     R11-CORE      │                   │     SW10-CORE     │                   │    R12-ROMANA     │
    │  192.168.254.1    │                   │   192.168.254.3   │                   │   192.168.254.2   │
    │ Santo Domingo (SD)│                   │   Santiago (STGO) │                   │  La Romana (ROM)  │
    │   Área 0 + Área 1 │                   │   Área 0 + Área 2 │                   │   Área 0 + Área 3 │
    └─────────┬─────────┘                   └─────────┬─────────┘                   └─────────┬─────────┘
              │                                       │                                       │
     ┌────────┴────────┐                              │ (Uplink Trunk)                        │ (PTP 192.168.254.16/30)
     │                 │                              │                                       │
┌────┴────┐       ┌────┴────┐                         │                              ┌────────┴────────┐
│   SW3   │ Eth-  │   SW4   │                         │                              │      SW8        │
│ Dist L3 │ Trunk │ Dist L3 │                         │                              │ Dist L3 (Relay) │
│ (Master)│◄─────►│ (Backup)│                         │                              └────────┬────────┘
└────┬────┘       └────┬────┘                         │                                       │
     │                 │                              │                                       │ (Trunk)
  ┌──┴────────┬────────┴──┐                  ┌────────┴────────┐                     ┌────────┴────────┐
  │           │           │                  │      SW11       │                     │      SW9        │
┌─┴───┐     ┌─┴───┐     ┌─┴───┐              │ Acceso Servidor │                     │ Acceso CallCtr  │
│ SW5 │     │ SW6 │     │ SW7 │              └──┬───┬───┬───┬──┘                     └─────────────────┘
│Depto│     │Depto│     │Depto│                 │   │   │   │                         (Call Center 24/7)
│1 (V10)    │2 (V20)    │3&4(V30,40)            │   │   │   └─► DNS / WEB (192.168.10.66)
└─────┘     └─────┘     └─────┘                 │   │   └─────► MAIL Srv  (192.168.10.67)
 (Redundancia VRRP + RSTP)                      │   └─────────► RADIUS/NFS(192.168.10.68)
                                                └─────────────► Deptos Ventas/Admin
```

---

## 📊 Plan de Direccionamiento IP (VLSM + 40% Crecimiento)

### 1. Sede Santo Domingo (Área 1 OSPF) — Bloque Base: `192.168.0.0/16`
- **VLAN 10 (Comercial / Ventas):** `192.168.0.0/24` | Gateway Virtual VRRP: `192.168.0.1` | Hosts: 154
- **VLAN 20 (Recursos Humanos):** `192.168.1.0/25` | Gateway Virtual VRRP: `192.168.1.1` | Hosts: 72
- **VLAN 30 (Operaciones):** `192.168.1.128/25` | Gateway Virtual VRRP: `192.168.1.129` | Hosts: 90
- **VLAN 40 (Finanzas & Legal):** `192.168.2.0/25` | Gateway Virtual VRRP: `192.168.2.1` | Hosts: 112
- **VLAN 99 (Gestión Switches):** `192.168.3.0/28` | Gateway Virtual VRRP: `192.168.3.1`

### 2. Sede Santiago (Área 2 OSPF — Centro de Datos)
- **VLAN 10 (DataCenter LAN):** `192.168.10.0/28` | Gateway: `192.168.10.1`
- **VLAN 30 (Administración Cibao):** `192.168.10.16/28` | Gateway: `192.168.10.17`
- **VLAN 20 (Ventas Cibao):** `192.168.10.32/27` | Gateway: `192.168.10.33`
- **VLAN 40 (Servidores Corporativos):** `192.168.10.64/28` | Gateway: `192.168.10.65`
  * `SERVER 1` (DNS Primario BIND9 / Web Apache / DHCP): `192.168.10.66`
  * `SERVER 2` (Correo Postfix/Dovecot): `192.168.10.67`
  * `SERVER 3` (FreeRADIUS AAA / Servidor NFS): `192.168.10.68`

### 3. Sede La Romana (Área 3 OSPF — Hub Call Center) — Auditado y Corregido
- **VLAN 10 (Call Center Inbound):** `192.168.20.0/26` | Gateway: `192.168.20.1` | Hosts: 35 *(Ajustado a /26)*
- **VLAN 30 (Estadística & Calidad):** `192.168.20.64/28` | Gateway: `192.168.20.65` | Hosts: 10
- **VLAN 20 (Televentas & CRM):** `192.168.20.128/25` | Gateway: `192.168.20.129` | Hosts: 73

### 4. Salida Pública Internet & NAT (`19.0.0.0/24`)
- **R11 WAN:** `19.0.0.1/30` con NAPT hacia el ISP (`19.0.0.2/30`).
- **Servidor Web Nube:** `19.0.0.10/24`.

---

## 🛡️ Matriz de Seguridad y Mitigación de Ataques

| Amenaza / Ataque | Solución Implementada en Huawei VRP | Comando Clave |
| :--- | :--- | :--- |
| **Acceso no autorizado** | SSH v2 (STelnet) con autenticación AAA y llaves RSA 2048 | `stelnet server enable`, `rsa local-key-pair create` |
| **DHCP Spoofing & Starvation** | DHCP Snooping con puertos confiables/no confiables | `dhcp snooping enable`, `dhcp snooping trusted` |
| **ARP Spoofing / Man-in-the-Middle** | Dynamic ARP Inspection basado en tabla DHCP Snooping | `arp anti-attack check user-bind enable` |
| **Saturación CAM / MAC Flooding** | Port Security con aprendizaje MAC Sticky (máx. 2) | `port-security mac-address sticky`, `action restrict` |
| **VLAN Hopping & Double Tagging** | PVID Nativo 999 no ruteable y poda estricta de trunks | `port trunk pvid vlan 999`, `allow-pass vlan ...` |
| **Rogue Root Bridge (STP)** | RSTP Edge-Port y BPDU Protection en puertos de acceso | `stp bpdu-protection`, `stp edged-port enable` |
| **Espionaje en Enlace WAN** | VPN IPsec Dinámica AES-256 + SHA2-256 (IKEv1 DH-14) | `ipsec policy POL-ROMANA 10 isakmp` |

---

## 📂 Estructura del Repositorio

```text
├── PROYECTO FINAL DE INFRAESTRUCTURA DE RED DE LA EMPRESA 3.pdf   (Dossier oficial de 9 páginas)
├── PROYECTO_FINAL_EMPRESA_3_OFICIAL.pdf                           (Copia oficial definitiva)
├── README.md                                                      (Portada de GitHub con topología y datos)
├── branding/
│   ├── MANUAL_DE_IDENTIDAD.pdf                                    (Manual de marca en PDF)
│   ├── manual-identidad.md                                        (Manual de marca en Markdown)
│   ├── logo-servidom.svg                                          (Logotipo oficial vectorial en alta definición)
│   └── uniformes-corporativos.html                                (Visualizador de uniformes y credenciales de los 6)
├── configs/
│   ├── santo-domingo/                                             (R11-Core, SW3 Master, SW4 Backup, SW5 Acceso)
│   ├── santiago/                                                  (SW10 Core Gateway, SW11 Acceso Servidores)
│   ├── romana/                                                    (R12 Router DHCP Central, SW8 Distribución Relay)
│   └── servidores/                                                (BIND9 DNS, Apache, FreeRADIUS AAA, Postfix Mail)
├── diagrams/
│   ├── LABORATORIO SIMULADO.unl                                   (Topología oficial exportada de PNetLab)
│   └── README.md                                                  (Memoria de topología y mapeo de enlaces)
├── docs/
│   ├── NOTA_ACLARATORIA_DOCENTE.pdf                               (Nota formal en PDF sobre tecnología Huawei y .unl)
│   ├── DIRECCIONAMIENTO_IP_VLSM.pdf                               (Tabla VLSM en PDF con +40% de crecimiento)
│   ├── FICHA_TECNICA_EQUIPOS.pdf                                  (Datasheets Huawei vs Cisco en PDF)
│   ├── ORGANIGRAMA_Y_EQUIPO.pdf                                   (Perfiles y roles de los 6 integrantes en PDF)
│   ├── COTIZACION_FORMAL.pdf                                      (Presupuesto formal en USD y DOP en PDF)
│   ├── POLITICAS_DE_SEGURIDAD.pdf                                 (Políticas de seguridad L2/L3 en PDF)
│   ├── nota-aclaratoria-docente.md                                (Nota formal en Markdown)
│   ├── direccionamiento-ip.md                                     (VLSM en Markdown)
│   ├── equipos.md                                                 (Fichas técnicas en Markdown)
│   ├── organigrama.md                                             (Organigrama en Markdown)
│   ├── cotizacion.md                                              (Cotización en Markdown)
│   └── seguridad-politicas.md                                     (Seguridad en Markdown)
├── scripts/
│   └── Empresa3_Huawei_Master_Scripts.txt                         (Script consolidado para PNetLab)
└── web/
    ├── index.html                                                 (Sitio web www.servidom.com.do)
    ├── styles.css                                                 (Estilos responsivos)
    └── app.js                                                     (Cotizador online, chat y login intranet)
```

---

## 🚀 Verificación en Vivo (Comandos Huawei VRP)

```text
<R11> display ospf peer brief          # Verifica adyacencias OSPF en estado Full
<SW3> display vrrp brief               # Verifica a SW3 como Master en VLANs 10, 20, 30, 40, 99
<R11> display ipsec sa                 # Verifica la asociación de seguridad del túnel IPsec
<SW5> display port-security mac-address # Verifica las MAC aprendidas de forma sticky
<SW3> display dhcp snooping user-bind all # Muestra la tabla de DHCP Snooping activa
```

---
© 2026 SERVIDOM S.A. (Empresa 3) — Instituto Tecnológico de Las Américas (ITLA).
