# 🎬 CINEPLEX DB — Entrega Final
 
**Universidad Nacional — Sede Región Brunca**  
**División de Ciencias Exactas, Naturales y Tecnología**  
**Curso:** EIF 211 — Diseño e Implementación de Bases de Datos  

---
 
## 📋 Descripción del Proyecto
 
CINEPLEX es una solución de base de datos no relacional de alto rendimiento desarrollada en **MongoDB Atlas**. El proyecto gestiona de forma integral el ecosistema de un cine moderno: desde la infraestructura física (salas y complejos) hasta la experiencia del usuario (programa de lealtad, reservas en tiempo real y promociones dinámicas).
 
El sistema está diseñado bajo una arquitectura de **documentos enriquecidos**, optimizando la velocidad de consulta mediante denormalización estratégica en boletos y funciones para garantizar una respuesta inmediata en el punto de venta.
 
---
 
## 🚀 Colecciones Implementadas (13)
 
Se ha completado el esquema íntegro de la base de datos con **2 documentos coherentes por colección**, reflejando casos de uso reales:
 
| Módulo | Colecciones | Descripción |
|---|---|---|
| **Infraestructura** | `cadenas_cines`, `complejos`, `salas` | Gestión de marcas (CineMark, Nova) y sus instalaciones físicas. |
| **Catálogo** | `peliculas` | Información detallada, incluyendo *The Eras Tour* y *Minecraft Movie*. |
| **Programación** | `funciones`, `horarios` | Control de tandas, formatos (IMAX, 4DX) y tiempos técnicos de limpieza. |
| **Comercial** | `tarifas`, `promociones` | Precios por categoría y reglas de negocio para descuentos dinámicos. |
| **Usuarios** | `clientes`, `asientos` | Perfiles de lealtad (Hairol Romero, Matteo Vargas) y estado de butacas. |
| **Transaccional** | `reservas`, `boletos`, `historial` | Flujo de compra, emisión de tickets QR y auditoría de redenciones. |
 
---
 
## ⚙️ Configuración de MongoDB Atlas
 
### Datos de Conexión
```text
Cluster        : CINEPLEX-CLUSTER
Base de datos  : cineplex-db
Estado         : Producción / Entrega Final
