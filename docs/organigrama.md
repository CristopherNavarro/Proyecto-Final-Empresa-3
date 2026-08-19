# Estructura Organizativa y Perfil de Ingeniería — SERVIDOM S.A. (Empresa 3)
**Proyecto Final de Conmutación y Enrutamiento (TI-203) — ITLA**  
*Docente: Prof. Onel Luis Pelegrino*

---

## 1. Organigrama Corporativo de TI

```
                            ┌──────────────────────────────────────────────────┐
                            │               CRISTOPHER NAVARRO                 │
                            │              (Matrícula: 2025-0720)              │
                            │    Director General de TI & Arquitectura Web     │
                            └─────────────────────────┬────────────────────────┘
                                                      │
                       ┌──────────────────────────────┴──────────────────────────────┐
                       │                                                             │
        ┌──────────────┴──────────────┐                               ┌──────────────┴──────────────┐
        │        JUSTIN LUCIANO       │                               │         SAYID CABRAL        │
        │    (Matrícula: 2025-0054)   │                               │    (Matrícula: 2025-1364)   │
        │   Coord. Servicios Digitales│                               │   Ing. Soluciones & Enlace  │
        │   & Finanzas / Presupuesto  │                               │       Técnico CECOMPE       │
        └──────────────┬──────────────┘                               └──────────────┬──────────────┘
                       │                                                             │
        ┌──────────────┴──────────────────────────────┬──────────────────────────────┴──────────────┐
        │                                             │                                             │
┌───────┴──────────────────────┐       ┌──────────────┴──────────────┐       ┌──────────────────────┴───────┐
│        GREGORY MOREL         │       │        YADHIER LÓPEZ        │       │       ENMANUEL MENDEZ        │
│    (Matrícula: 2025-0035)    │       │    (Matrícula: 2025-1365)   │       │    (Matrícula: 2025-0753)    │
│  Especialista en Conmutación │       │   Administrador de Servicios│       │   Especialista en Redes WAN  │
│  LAN & Redundancia VRRP/RSTP │       │   de DataCenter & Linux     │       │   OSPF & VPN IPsec Dinámica  │
│       (Santo Domingo)        │       │          (Santiago)         │       │         (La Romana)          │
└──────────────────────────────┘       └─────────────────────────────┘       └──────────────────────────────┘
```

---

## 2. Perfil y Responsabilidades del Equipo de Ingeniería

### 2.1 Cristopher Navarro (Matrícula: 2025-0720)
- **Cargo:** Director General de TI & Arquitecto de Plataformas Web Corporativas.
- **Responsabilidades Clave:**
  - Liderazgo general del proyecto y aseguramiento de calidad de todos los entregables.
  - Diseño conceptual y desarrollo del portal web institucional (`web/index.html`).
  - Coordinación de la identidad visual de la empresa (Logotipo, uniformes y credenciales).
  - Apertura formal y moderación de la defensa presencial ante el docente.

### 2.2 Justin Luciano (Matrícula: 2025-0054)
- **Cargo:** Coordinador de Servicios Digitales, Call Center & Presupuesto de Infraestructura.
- **Responsabilidades Clave:**
  - Modelado del plan de negocio digital, servicios en línea y centro de atención al cliente.
  - Elaboración y justificación técnica del presupuesto / cotización de implementación en USD y DOP.
  - Exposición de la plataforma comercial y análisis de costos en la defensa presencial.

### 2.3 Sayid Cabral (Matrícula: 2025-1364)
- **Cargo:** Ingeniero de Soluciones de Infraestructura & Enlace Técnico CECOMPE.
- **Responsabilidades Clave:**
  - Análisis riguroso del pliego de condiciones técnicas emitido por CECOMPE.
  - Justificación de la arquitectura jerárquica de 3 capas y selección de equipos Huawei Enterprise frente a Cisco.
  - Exposición del marco de diseño y lineamientos técnicos globales durante la defensa.

### 2.4 Gregory Morel (Matrícula: 2025-0035)
- **Cargo:** Especialista en Conmutación LAN & Alta Disponibilidad (Sede Santo Domingo).
- **Responsabilidades Clave:**
  - Implementación y validación de la redundancia de Capa 3 mediante **VRRP** (SW3 Maestro / SW4 Respaldo).
  - Configuración de agregación de enlaces **Eth-Trunk** (LACP) y mitigación de bucles con **RSTP**.
  - Configuración de VLANs 10, 20, 30, 40 y VLAN 99 de gestión en Santo Domingo.
  - Exposición y demostración técnica de la Sede Central en la defensa.

### 2.5 Yadhier López (Matrícula: 2025-1365)
- **Cargo:** Administrador de Servicios de Centro de Datos & Plataformas Linux (Sede Santiago).
- **Responsabilidades Clave:**
  - Configuración de servicios en servidor Linux: DNS (BIND9), Web (Apache), DHCP por departamentos, RADIUS (FreeRADIUS) y Correo (Postfix).
  - Configuración del switch multicapa SW10 y switch de servidores SW11 en el Área 2 OSPF.
  - Exposición y demostración técnica de los servicios de DataCenter en la defensa.

### 2.6 Enmanuel Mendez (Matrícula: 2025-0753)
- **Cargo:** Especialista en Enrutamiento WAN OSPF & Seguridad VPN IPsec (Sede La Romana).
- **Responsabilidades Clave:**
  - Implementación del enrutamiento OSPF Multiárea (Área 0 Backbone y Área 3 Romana).
  - Despliegue del túnel VPN IPsec dinámico (IKEv1 / AES-256 / SHA2-256) entre R12 y R11-Core.
  - Configuración del Router R12 como Servidor DHCP dinámico con DHCP Relay en SW8.
  - Exposición de la Sede La Romana, verificación con comandos `display` en vivo y cierre de la defensa.
