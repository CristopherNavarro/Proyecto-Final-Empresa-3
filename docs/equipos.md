# Descripción de Equipos y Justificación Tecnológica — SERVIDOM S.A.
**Infraestructura de Red Basada en Tecnología Huawei Enterprise**  
*Asignatura: Conmutación y Enrutamiento (TI-203) — Prof. Onel Luis Pelegrino*

---

## 1. Filosofía de Selección Tecnológica: ¿Por qué Huawei Enterprise?

La arquitectura de red de **SERVIDOM S.A. (Empresa 3)** fue concebida conforme a los requerimientos de **CECOMPE**, adoptando equipamiento **Huawei Enterprise** con sistema operativo **Huawei VRP (Versatile Routing Platform)**. 

### Ventajas Competitivas de Huawei frente a Soluciones Tradicionales:
1. **Rendimiento y Eficiencia Energética:** La serie de switches Huawei S5700 y routers AR6000 incorporan procesadores NP (Network Processor) dedicados con tecnología *Energy Efficient Ethernet (EEE)*, reduciendo el consumo eléctrico hasta en un 30%.
2. **Sistema Operativo VRP Unificado:** Un único sistema operativo modular para routers y switches, facilitando la estandarización de comandos (`system-view`, `vlan batch`, `display`, etc.) y el despliegue de políticas de seguridad.
3. **Seguridad Integrada sin Licenciamiento Extra:** Mecanismos avanzados de seguridad de Capa 2 (DHCP Snooping, Dynamic ARP Inspection, Port Security con MAC Sticky, BPDU Protection) y Capa 3 (VPN IPsec AES-256) integrados de fábrica sin costos recurrentes de licenciamiento por función.
4. **Relación Costo-Beneficio Óptima:** Equipamiento con mayor densidad de puertos Gigabit/10G y capacidades de hardware superiores a menor costo de adquisición y soporte.

---

## 2. Fichas Técnicas de Equipos Utilizados

### 2.1 Router de Núcleo Santo Domingo — Huawei AR6120 / AR2220 (R11-Core)
| Parámetro | Especificación Técnica |
| :--- | :--- |
| **Tipo de Dispositivo** | Router de Núcleo y Borde Empresarial (Enterprise Core Router) |
| **Modelo Emulado / Físico** | Huawei AR6120 Series / Huawei AR2220 (VRP v5.170) |
| **Rendimiento WAN** | 2 Gbps a 5 Gbps con servicios integrados activos |
| **Capacidad de Enrutamiento** | Hasta 2,000,000 de paquetes por segundo (Mpps) |
| **Interfaces Principales** | 4x GE Combo (RJ45/SFP) + 2x 10GE SFP+ + Ranuras SIC/WSIC |
| **Protocolos Soportados** | OSPFv2/v3, BGP4, VRRP, IPsec VPN (Hardware Acceleration), NAT/NAPT, QoS |
| **Función en el Proyecto** | Actúa como nodo central de enrutamiento OSPF (Área 0 y 1), salida NAT hacia Internet pública (`19.0.0.1`), y concentrador Hub del túnel VPN IPsec dinámico hacia La Romana. |

---

### 2.2 Router de Sucursal La Romana — Huawei AR6120 / AR2220 (R12-Romana)
| Parámetro | Especificación Técnica |
| :--- | :--- |
| **Tipo de Dispositivo** | Router de Sucursal y Hub de Servicios (Branch Service Router) |
| **Modelo Emulado / Físico** | Huawei AR6120 Series (VRP v5.170) |
| **Capacidades Clave** | Servidor DHCP Centralizado, Concentrador Spoke VPN IPsec, Enrutamiento OSPF Área 0 y 3 |
| **Interfaces Principales** | 2x GE RJ45 WAN/LAN + 2x GE SFP + Ranuras de expansión |
| **Función en el Proyecto** | Administra la asignación dinámica de direcciones IP para los 3 departamentos de La Romana mediante pools DHCP locales (`ip pool`), y establece el túnel VPN IPsec dinámico con Santo Domingo. |

---

### 2.3 Switches de Distribución / Núcleo L3 — Huawei CloudEngine S5735-S / S5720 (SW3, SW4, SW8, SW10)
| Parámetro | Especificación Técnica |
| :--- | :--- |
| **Tipo de Dispositivo** | Switch Multicapa de Distribución Layer 3 (Routing Switch) |
| **Modelo Emulado / Físico** | Huawei CloudEngine S5735-S24T4X / S5720-EI |
| **Capacidad de Conmutación** | 336 Gbps / 126 Mpps |
| **Interfaces Físicas** | 24x 10/100/1000Base-T + 4x 10GE SFP+ uplinks |
| **Funciones L3 Activas** | Inter-VLAN Routing (Vlanif), OSPFv2 Multiárea, VRRP v2 Maestro/Respaldo, DHCP Relay y Server |
| **Funciones L2 y Resiliencia** | RSTP / MSTP, Eth-Trunk (Link Aggregation LACP), Port Isolation, VLAN Stacking |
| **Función en el Proyecto** | - **SW3 y SW4 (Santo Domingo):** Gateways redundantes VRRP (Maestro prio 120 / Respaldo prio 100) interconectados por Eth-Trunk.<br>- **SW10 (Santiago):** Gateway L3 y enrutador del Área 2.<br>- **SW8 (La Romana):** Gateway L3 y DHCP Relay hacia R12. |

---

### 2.4 Switches de Acceso LAN — Huawei CloudEngine S5735-L (SW5, SW6, SW7, SW9, SW11)
| Parámetro | Especificación Técnica |
| :--- | :--- |
| **Tipo de Dispositivo** | Switch de Acceso Layer 2 Gestionable (Access Edge Switch) |
| **Modelo Emulado / Físico** | Huawei CloudEngine S5735-L24T4S-A |
| **Capacidad de Conmutación** | 56 Gbps / 42 Mpps |
| **Interfaces Físicas** | 24x 10/100/1000Base-T + 4x GE SFP uplinks |
| **Seguridad Implementada** | Port Security con MAC Sticky (máx. 2 MACs por puerto), DHCP Snooping, Dynamic ARP Inspection (DAI), RSTP Edge-Port con BPDU Protection |
| **Función en el Proyecto** | Proporcionar conexión cableada segura a estaciones de trabajo de usuarios finales en Santo Domingo (SW5-SW7), La Romana (SW9) y Servidores en Santiago (SW11). |

---

### 2.5 Servidor Corporativo de Aplicaciones y Red — Huawei FusionServer Pro 2288H V5
| Parámetro | Especificación Técnica |
| :--- | :--- |
| **Tipo de Dispositivo** | Servidor de Rack Empresarial 2U |
| **Procesadores** | 2x Intel Xeon Silver 4210R (10 núcleos / 20 hilos @ 2.4 GHz) |
| **Memoria RAM** | 64 GB DDR4-2933 MHz ECC Registrada (Expandible a 1.5 TB) |
| **Almacenamiento** | 4x 960 GB SSD SAS Enterprise en RAID 10 (Arreglo tolerante a fallos) |
| **Conectividad de Red** | 4x 1GbE RJ45 + 2x 10GbE SFP+ con failover LACP |
| **Sistema Operativo** | Ubuntu Server 22.04 LTS / Debian GNU/Linux 12 |
| **Servicios Desplegados** | - **DNS Primario:** BIND9 (`servidom.com.do`)<br>- **Servidor Web:** Apache 2.4 / Nginx con HTTP/2 (`www.servidom.com.do`)<br>- **Servidor AAA / RADIUS:** FreeRADIUS 3.0 para autenticación de ingenieros<br>- **Servidor de Correo:** Postfix + Dovecot IMAP/SMTP con buzones de equipo<br>- **Almacenamiento Compartido:** NFS v4 (Network File System) para respaldos |
