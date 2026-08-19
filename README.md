# 🌐 SERVIDOM S.A. — Infraestructura de Red Corporativa (Empresa 3)
### *Dominicana de Servicios & Comercio Electrónico S.A.*
**Asignatura:** Conmutación y Enrutamiento (TI-203) — **Instituto Tecnológico de Las Américas (ITLA)**  
**Docente:** Prof. Onel Luis Pelegrino  
**Consultora Tecnológica:** CECOMPE (Centro de Cómputos Pelegrino)  
**Repositorio Oficial:** [`https://github.com/CristopherNavarro/Proyecto-Final-Empresa-3`](https://github.com/CristopherNavarro/Proyecto-Final-Empresa-3)  

---

## 📌 Resumen Ejecutivo del Proyecto

El presente repositorio contiene la memoria técnica, diseño de ingeniería, esquemas de direccionamiento VLSM auditados, configuraciones Huawei VRP, servicios de Centro de Datos, desarrollo web, presupuesto formal y manuales de identidad desarrollados para **SERVIDOM S.A. (Empresa 3)**.

La infraestructura está diseñada bajo un modelo jerárquico de 3 capas (Núcleo, Distribución y Acceso), integrando enrutamiento dinámico **OSPF Multiárea**, alta disponibilidad y redundancia de primer salto con **VRRP**, prevención de bucles mediante **RSTP**, enlaces agregados **Eth-Trunk (LACP)**, túnel seguro **VPN IPsec AES-256**, servicios de red (DNS BIND9, Apache Web, DHCP, FreeRADIUS y Postfix Mail) y estrictos mecanismos de seguridad de Capa 2 y Capa 3.

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

## 🗺️ Diagrama de Topología Lógica y Áreas OSPF

```
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

### 3. Sede La Romana (Área 3 OSPF — Hub Call Center)
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

```
├── README.md                           # Documentación principal de GitHub
├── branding/                           # Identidad corporativa, logo SVG y uniformes
│   ├── logo-servidom.svg               # Logotipo oficial vectorial en alta definición
│   ├── manual-identidad.md             # Manual de colores, tipografía y lineamientos
│   └── uniformes-corporativos.html     # Visualizador interactivo de uniformes y credenciales
├── web/                                # Sitio Web Corporativo (Servidor Web Santiago)
│   ├── index.html                      # Portal comercial, call center y cotizador online
│   ├── styles.css                      # Estilos visuales modernos y responsivos
│   └── app.js                          # Lógica interactiva y portal intranet RADIUS
├── docs/                               # Documentación técnica completa
│   ├── direccionamiento-ip.md          # Tabla VLSM detallada y justificación matemática
│   ├── equipos.md                      # Fichas técnicas de Huawei Enterprise vs Cisco
│   ├── organigrama.md                  # Perfiles de los 6 ingenieros de la Empresa 3
│   ├── cotizacion.md                   # Presupuesto formal en USD y DOP con ITBIS
│   ├── seguridad-politicas.md          # Políticas de seguridad y listas de acceso (ACLs)
│   └── guion_defensa_presencial.md     # Guion de exposición presencial cronometrado
├── configs/                            # Configuraciones Huawei VRP por sede
│   ├── santo-domingo/                  # R11-Core, SW3 Master, SW4 Backup, SW5-SW7 Acceso
│   ├── santiago/                       # SW10 Core Gateway, SW11 Acceso Servidores
│   ├── romana/                         # R12 Router, SW8 Distribución Relay, SW9 Acceso
│   ├── seguridad/                      # VPN IPsec, Hardening AAA, ACLs Inter-VLAN
│   └── servidores/                     # Configs de BIND9, Apache, DHCP, RADIUS y Postfix
├── scripts/                            # Scripts consolidados para despliegue en PNetLab
│   └── Empresa3_Huawei_Master_Scripts.txt
└── PROYECTO_FINAL_EMPRESA_3_OFICIAL.pdf # Documento PDF oficial final compilado
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