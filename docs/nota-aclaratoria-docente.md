# NOTA ACLARATORIA FORMAL PARA EL DOCENTE
**Asignatura:** Conmutación y Enrutamiento (TI-203) — **Instituto Tecnológico de Las Américas (ITLA)**  
**Docente:** Prof. Onel Luis Pelegrino  
**Grupo de Trabajo:** Empresa 3 — *SERVIDOM S.A. (Dominicana de Servicios & Comercio Electrónico S.A.)*  
**Integrantes:** Cristopher Navarro (2025-0720), Justin Luciano (2025-0054), Sayid Cabral (2025-1364), Gregory Morel (2025-0035), Yadhier López (2025-1365), Enmanuel Mendez (2025-0753).  

---

### Estimado Profesor Onel Luis Pelegrino:

El equipo de ingeniería de la **Empresa 3 (SERVIDOM S.A.)** presenta la siguiente memoria técnica y consideraciones sobre la implementación del proyecto:

#### 1. Implementación Integral sobre Tecnología Huawei Enterprise
Nuestro equipo asumió el compromiso técnico de ser el **único grupo en diseñar, desplegar y validar la totalidad de la infraestructura sobre tecnología Huawei Enterprise (VRP - Versatile Routing Platform)** en el emulador PNetLab. Implementamos Routers AR6120 y Switches CloudEngine S5735 L3 y L2, configurando de manera nativa protocolos de alta disponibilidad y seguridad:
- **Redundancia L3:** VRRP v2 con prioridades diferenciadas (Maestro prio 120 / Respaldo prio 100) y temporizadores de preemption.
- **Redundancia L2 y Agregación:** RSTP con protección de BPDU y agregación de enlaces LACP (`Eth-Trunk 1`) con 3 puertos GigabitEthernet agrupados.
- **Enrutamiento Dinámico:** OSPF Multiárea (Área 0 Backbone NUBE, Área 1 Santo Domingo, Área 2 Santiago y Área 3 La Romana) con autenticación criptográfica MD5 y sumarización.
- **Seguridad Perimetral y WAN:** Túnel dinámico VPN IPsec (IKEv1 AES-256 / SHA2-256) entre Santo Domingo y La Romana activado por tráfico interesante.
- **Seguridad de Acceso L2:** DHCP Snooping con puertos confiables/no confiables, Dynamic ARP Inspection (DAI) y Port Security con aprendizaje MAC Sticky.

#### 2. Consideración Técnica sobre la Exportación del Archivo `.unl` en PNetLab
Tal como se expuso en las sesiones prácticas de laboratorio, el emulador PNetLab / EVE-NG presenta un comportamiento particular en la exportación de topologías en formato `.unl`: **el archivo XML generado (`.unl`) exporta la estructura gráfica, los nodos y los enlaces virtuales, pero la memoria NVRAM (`startup-config` / `vrpcfg.zip`) de las imágenes de dispositivos Huawei se gestiona en el almacenamiento temporal del host de virtualización**.

Por este motivo, para validar y replicar de manera exacta e inmediata la configuración en cualquier entorno PNetLab, la entrega incluye:
1. **Script Maestro Consolidado de Comandos (`scripts/Empresa3_Huawei_Master_Scripts.txt`):** Contiene la secuencia completa de comandos organizada por dispositivo, lista para ser ejecutada directamente en consola.
2. **Archivos Modulares por Equipo (`configs/*`):** Archivos individuales de configuración para cada router, switch L3/L2 y servicios de servidores Linux (DNS BIND9, Apache Web, FreeRADIUS AAA y Postfix Mail).
3. **Dossier Documental Completo en PDF (`docs/*`):** Memoria de cálculo VLSM (+40% de crecimiento), fichas técnicas, organigrama, cotización formal y políticas de seguridad.

Atentamente,  
**Equipo de Ingeniería Empresa 3 — SERVIDOM S.A.**  
*División de Telecomunicaciones & Redes — ITLA*
