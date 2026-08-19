# Matriz de Políticas de Seguridad de Red — SERVIDOM S.A. (Empresa 3)
**Seguridad Perimetral, Mitigación de Capa 2 y Control de Acceso AAA**  
*Asignatura: Conmutación y Enrutamiento (TI-203) — ITLA*  
*Docente: Prof. Onel Luis Pelegrino*

---

## 1. Resumen de Amenazas Mitigadas y Controles Huawei

| Vector de Ataque / Riesgo | Mecanismo de Seguridad Huawei | Configuración Implementada | Dispositivos Aplicados |
| :--- | :--- | :--- | :--- |
| **Acceso no autorizado a equipos** | **SSH v2 (STelnet) + AAA** | Autenticación local AAA, Llaves RSA 2048-bit, Telnet deshabilitado, VTY con timeout 10 min y límite de reintentos | Todos los Routers y Switches |
| **DHCP Spoofing & Rogue DHCP** | **DHCP Snooping** | `dhcp snooping enable` por VLAN. Puertos de enlace ascendente como `trusted`; puertos de usuario como `untrusted` | SW3, SW4, SW5-SW7, SW8, SW9, SW10, SW11 |
| **ARP Spoofing / Man-in-the-Middle** | **Dynamic ARP Inspection (DAI)** | `arp anti-attack check user-bind enable` y protección contra duplicado de gateway (`gateway-duplicate enable`) | Switches de Acceso y Distribución |
| **Saturación de Tabla CAM / MAC Flooding** | **Port Security con MAC Sticky** | `port-security enable`, `port-security max-mac-num 2`, acción `protect-action restrict` y aprendizaje persistente `sticky` | Puertos de Acceso de Usuario |
| **Ataques de VLAN Hopping (Doble Etiquetado)** | **Hardening de Troncales 802.1Q** | VLAN nativa cambiada de la predeterminada (PVID 999 no ruteable) y poda explícita de VLANs permitidas (`port trunk allow-pass vlan ...`) | Todos los enlaces Trunk |
| **Ataques contra STP / Rogue Root Bridge** | **RSTP BPDU Protection & Root Protection** | `stp bpdu-protection` global, puertos de usuario como `stp edged-port enable`, prioridades de puente explícitas (SW3 prio 4096, SW4 prio 8192) | Todos los Switches de la red |
| **Intercepción de Tráfico WAN Inter-Sedes** | **VPN IPsec Dinámica con Cifrado Fuerte** | Fase 1: IKEv1, DH Group 14 (2048-bit), AES-256, SHA2-256.<br>Fase 2: ESP-AES-256, ESP-SHA2-256. Clave precompartida cifrada | Routers R11-Core y R12-Romana |
| **Tráfico no autorizado Inter-Departamental** | **Listas de Control de Acceso (ACLs)** | ACLs avanzadas (3000-3999) aplicadas en gateways para restringir acceso cruzado entre departamentos y proteger servidores | R11-Core, SW3/SW4, SW10, SW8 |

---

## 2. Detalle de Políticas de Control de Acceso (ACLs)

### 2.1 ACL de Aislamiento y Acceso a Servidores (Santiago SW10)
```
acl number 3001
 description CONTROL-ACCESO-CENTRO-DATOS
 rule 5 permit tcp source 192.168.10.32 0.0.0.31 destination 192.168.10.66 0.0.0.0 destination-port eq 80
 rule 10 permit tcp source 192.168.10.32 0.0.0.31 destination 192.168.10.66 0.0.0.0 destination-port eq 443
 rule 15 permit tcp source 192.168.10.16 0.0.0.15 destination 192.168.10.64 0.0.0.15
 rule 20 permit icmp source any destination 192.168.10.64 0.0.0.15
 rule 25 deny ip source any destination 192.168.10.64 0.0.0.15
```

### 2.2 ACL de Salida NAT y Exclusión de Tráfico VPN (R11-Core)
```
acl number 2001
 description NAT-SALIDA-INTERNET-PUBLICA
 rule 5 permit source 192.168.0.0 0.0.255.255
```
