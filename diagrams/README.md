# Diagramas de Topología — SERVIDOM S.A. (Empresa 3)

## Topología Lógica Multiárea OSPF (PNetLab)
- **Área 0 (Backbone WAN Transit):** Interconexión de R11 (SD), SW10 (STGO) y R12 (ROM) sobre 192.168.254.0/29.
- **Área 1 (Sede Central Santo Domingo):** Distribución L3 redundante con VRRP v2 (SW3 Master / SW4 Backup) y enlaces agregados Eth-Trunk LACP.
- **Área 2 (Sede Santiago / Centro de Datos):** Distribución L3 con SW10 y segmento dedicado de servidores de misión crítica (DNS BIND9, Web Apache, FreeRADIUS AAA, Postfix Mail, NFS).
- **Área 3 (Sede La Romana / Hub Call Center):** Enrutamiento WAN con R12 (Servidor DHCP Central), SW8 (DHCP Relay) y túnel seguro VPN IPsec AES-256 hacia Santo Domingo.
