# 🗺️ Topología de Red y Laboratorio Simulado — SERVIDOM S.A. (Empresa 3)

En este directorio se encuentra el archivo de topología oficial exportado directamente desde el emulador **PNetLab**:

- 📁 [**`LABORATORIO SIMULADO.unl`**](LABORATORIO%20SIMULADO.unl): Archivo XML de la topología con los 15 nodos interconectados (Routers Huawei AR6120, Switches CloudEngine S5735 y Servidores de DataCenter).

---

## 🚀 Instrucciones para Replicar la Topología en PNetLab / EVE-NG

1. **Importar el Archivo `.unl`:**
   - Inicie sesión en la interfaz web de PNetLab como Administrador.
   - Vaya a la sección de laboratorios y haga clic en **"Import"** (o copie el archivo a `/opt/unetlab/labs/`).
   - Seleccione el archivo `LABORATORIO SIMULADO.unl`.

2. **Iniciar los Nodos:**
   - Encienda todos los routers (`R11`, `R12`) y switches (`SW3` a `SW11`).

3. **Cargar las Configuraciones Huawei VRP:**
   - Abra la consola de cada dispositivo.
   - Copie y pegue los bloques de comandos disponibles en [`scripts/Empresa3_Huawei_Master_Scripts.txt`](../scripts/Empresa3_Huawei_Master_Scripts.txt) o en la carpeta [`configs/`](../configs/).

4. **Verificación de Convergencia:**
   - Ejecute `display ospf peer brief` para confirmar las adyacencias OSPF en estado **Full**.
   - Ejecute `display vrrp brief` para verificar el estado **Master** (prioridad 120 en SW3) y **Backup** (prioridad 100 en SW4).
   - Ejecute `display ipsec sa` para validar el túnel VPN dinámico entre Santo Domingo y La Romana.
