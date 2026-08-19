# NOTA ACLARATORIA FORMAL PARA EL DOCENTE
**Asignatura:** Conmutación y Enrutamiento (TI-203) — **Instituto Tecnológico de Las Américas (ITLA)**  
**Docente:** Prof. Onel Luis Pelegrino  
**Grupo de Trabajo:** Empresa 3 — *SERVIDOM S.A. (Dominicana de Servicios & Comercio Electrónico S.A.)*  
**Integrantes:** Cristopher Navarro (2025-0720), Justin Luciano (2025-0054), Sayid Cabral (2025-1364), Gregory Morel (2025-0035), Yadhier López (2025-1365), Enmanuel Mendez (2025-0753).  

---

### Estimado Profesor Onel Luis Pelegrino:

Por medio de la presente comunicación, el equipo de ingeniería responsable de la **Empresa 3 (SERVIDOM S.A.)** desea presentar una serie de aclaraciones y consideraciones técnicas fundamentales relativas a la entrega y evaluación de nuestro Proyecto Final:

#### 1. Implementación Exclusiva sobre Tecnología Huawei Enterprise
Queremos destacar con orgullo que nuestro equipo asumió el desafío de ser el **único grupo del curso en diseñar, desplegar y validar la totalidad de la infraestructura sobre tecnología Huawei Enterprise (VRP - Versatile Routing Platform)** en el emulador PNetLab. Mientras la mayoría de proyectos se desarrollaron sobre imágenes Cisco tradicionales, nosotros implementamos Routers Huawei AR6120 y Switches CloudEngine L3/L2 de última generación, configurando de manera nativa protocolos avanzados como **VRRP v2, RSTP con BPDU Protection, Agregación LACP (Eth-Trunk), OSPF Multiárea con autenticación criptográfica MD5, túneles dinámicos VPN IPsec (IKEv1 AES-256 / SHA2-256), DHCP Snooping, Dynamic ARP Inspection (DAI) y Port Security Sticky**.

#### 2. Consideración Técnica sobre la Exportación del Archivo `.unl` en PNetLab
Tal como se discutió y expuso en las sesiones prácticas de clase, el emulador PNetLab / EVE-NG presenta una particularidad en el mecanismo de exportación de archivos `.unl`: **el archivo XML generado (`.unl`) almacena exclusivamente el layout gráfico, los nodos y los enlaces virtuales interconectados, pero NO encapsula en su interior la memoria NVRAM (`startup-config` / `vrpcfg.zip`) de las imágenes de dispositivos Huawei**.

Por esta razón, la simple importación del archivo `.unl` en otro entorno desplegaría los equipos en su estado base de fábrica sin las configuraciones aplicadas.

#### 3. Mecanismos de Verificación y Validación del Proyecto
Para garantizar la máxima transparencia, rigurosidad académica y permitir una evaluación expedita del 100% de la rúbrica, nuestro equipo ha estructurado la entrega a través de tres fuentes de verificación directa e inobjetable:

1. **Documento Maestro Consolidado de Comandos (`scripts/Empresa3_Huawei_Master_Scripts.txt`):** Contiene el código de configuración ordenado secuencialmente equipo por equipo, listo para ser copiado y pegado en la consola de cada dispositivo en PNetLab.
2. **Archivos de Configuración Individual (`configs/*`):** Desglose modular de cada router, switch de distribución L3, switch de acceso L2 y servicios de servidores Linux (DNS BIND9, Apache Web, FreeRADIUS AAA, Postfix Mail).
3. **Video Demostrativo de Alta Definición:** Incorporado en nuestro repositorio de GitHub, donde se evidencia en tiempo real el encendido de la topología, la convergencia de protocolos (`display ospf peer`, `display vrrp`, `display ipsec sa`), pruebas de redundancia, failover y pruebas de conectividad *ping* extremo a extremo.
4. **Dossier Documental y Planos:** Memoria técnica completa en formato PDF que recopila el subneteo VLSM (+40% crecimiento), organigrama, fichas técnicas, cotización formal en USD y DOP, políticas de seguridad y manual de identidad corporativa.

Agradecemos de antemano su atención, orientación y retroalimentación en este proceso formativo.

Atentamente,  
**Equipo de Ingeniería Empresa 3 — SERVIDOM S.A.**  
*División de Telecomunicaciones & Redes — ITLA*
