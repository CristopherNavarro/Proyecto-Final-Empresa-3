# Guía Técnica de Requerimientos para el Video Demostrativo
**Asignatura:** Conmutación y Enrutamiento (TI-203) — **ITLA**  
**Docente:** Prof. Onel Luis Pelegrino  
**Grupo:** Empresa 3 — *SERVIDOM S.A.*  
**Objetivo:** Servir como lista de verificación exhaustiva para la grabación y evaluación del video demostrativo de funcionamiento de la topología en PNetLab.

---

## 📋 Checklist de Pruebas y Comandos para la Grabación

| Módulo / Fase | Equipo Evaluado | Comando de Verificación | Resultado Esperado en Pantalla |
| :--- | :--- | :--- | :--- |
| **1. Presentación Inicial** | Grabación de Pantalla | Cámara / Micrófono | Presentación de los 6 integrantes, código de vestimenta formal y vista global de la topología en PNetLab. |
| **2. Direccionamiento e Interfaces** | R11, SW3, SW10, R12 | `display ip interface brief` | Todas las interfaces físicas y lógicas (Vlanif, Loopback, Eth-Trunk) en estado `Up / Up` con sus IPs correctas. |
| **3. Redundancia L3 (VRRP)** | SW3 (Master) & SW4 (Backup) | `display vrrp brief` | SW3 muestra estado `Master` (Prioridad 120) en VLANs 10, 20, 30, 40, 99. SW4 muestra estado `Backup` (Prioridad 100). |
| **4. Prueba de Failover VRRP** | SW3 -> SW4 | `shutdown` en SW3 Vlanif10 y `ping` continuo | Conmutación transparente hacia SW4 sin pérdida de paquetes; SW4 asume rol `Master` temporalmente. |
| **5. Agregación de Enlaces (Eth-Trunk)** | SW3 & SW4 | `display eth-trunk 1` | Interfaz lógica `Eth-Trunk 1` activa en modo `lacp-static` con 3 enlaces GigabitEthernet miembros operando en balanceo de carga. |
| **6. Prevención de Bucles (RSTP)** | SW3, SW4, SW5 | `display stp brief` | SW3 identificado como `Root Bridge` (Prioridad 4096). Puertos de acceso hacia PCs en estado `Forwarding (Edge Port)`. |
| **7. Enrutamiento OSPF Multiárea** | R11, SW10, R12, SW3, SW8 | `display ospf peer brief` | Todas las adyacencias OSPF entre routers y switches de distribución en estado `Full`. |
| **8. Tablas de Enrutamiento IP** | R11, R12, SW10 | `display ip routing-table` | Rutas OSPF intra-área e inter-área aprendidas correctamente, incluyendo la ruta por defecto hacia la nube ISP. |
| **9. Servidor DHCP y Relay** | R12 (Router) & SW8 (Dist) | `display ip pool`, `display dhcp server tree` | R12 muestra asignaciones activas de los pools del Call Center. SW8 reenvía paquetes DHCP Discover vía Relay hacia R12. |
| **10. Seguridad de Capa 2 (Snooping / PortSec)** | SW5, SW6, SW9 | `display dhcp snooping user-bind all`, `display port-security` | Tabla de DHCP Snooping registrando IP/MAC en puertos no confiables; puertos de acceso bloqueando cambios de MAC (Sticky). |
| **11. Túnel VPN IPsec Dinámico** | R11 (SD) & R12 (Romana) | `display ike sa`, `display ipsec sa` | Asociación de seguridad IKEv1 y Phase 2 IPsec en estado `READY / SUCCESS` protegiendo el tráfico `192.168.0.0/22 <-> 192.168.20.0/24`. |
| **12. Conectividad Extremo a Extremo** | Estaciones de Trabajo / Servidores | `ping` continuo inter-sede | 100% de éxito en `ping` entre Santo Domingo, Santiago (DataCenter) y La Romana (Call Center). |
| **13. Demostración de Servicios de Red** | Navegador Web / Cliente Linux | Acceso a `http://192.168.10.66` (`www.servidom.com.do`) | Carga del portal web corporativo, resolución DNS, prueba de correo y login intranet con cuentas de los 6 ingenieros. |

---

## 🎥 Parámetros Técnicos de Grabación Sugeridos
- **Resolución:** Full HD (1920x1080) a 30 o 60 fps.
- **Audio:** Voces claras y audibles de los integrantes explicando cada bloque técnico.
- **Plataforma de Alojamiento:** YouTube (No listado / Público) o Google Drive con acceso público, enlazado directamente en el `README.md` del repositorio.
