# 🎬 CINEPLEX DB
 
**Universidad Nacional — Sede Región Brunca**  
**División de Ciencias Exactas, Naturales y Tecnología**  
**Curso:** EIF 211 — Diseño e Implementación de Bases de Datos  

---
 
## 📋 Descripción del Proyecto
 
CINEPLEX es una base de datos no relacional desarrollada en **MongoDB Atlas** para gestionar el sistema de reservaciones de boletos de cine de las principales cadenas cinematográficas de Costa Rica.
 
El sistema permite administrar cadenas de cines, complejos, salas, películas, funciones, horarios, tarifas, asientos, reservas, boletos y clientes de forma integrada y coherente.
 
---
 
## 🚀Colecciones Implementadas
 
En este primer avance se implementaron las **4 colecciones base**:
 
| Colección | Documentos | Descripción |
|---|---|---|
| `cadenas_cines` | 2 | Multicines PZ y Cinemark Costa Rica |
| `complejos` | 2 | Plaza Mayor (SJO) y Paseo Las Flores (HER) |
| `salas` | 2 | Sala IMAX y Sala VIP |
| `peliculas` | 3 | Barbie, A Minecraft Movie, The Eras Tour |
 
---
 
## ⚙️ Configuración de MongoDB Atlas
 
### Datos de conexión
```
Cluster  : CINEPLEX-Cluster
Base de datos : cineplex_db
```
 
### Cadena de conexión
```
mongodb+srv://<usuario>:<password>@cineplex-cluster.xxxxx.mongodb.net/cineplex_db
```
---
 
## 🔗 Referencias Entre Colecciones
 
```
cadenas_cines ←── complejos ←── salas ←── funciones ──→ peliculas
                                              │
                              tarifas ←── boletos ──→ reservas ──→ clientes
                                              │
                              asientos ───────┘
                              horarios ──→ funciones
```
 
---
 
## 📌 Notas Técnicas
 
- Motor exclusivo: **MongoDB Atlas**
- Todas las referencias entre colecciones usan **ObjectId**
- Las contraseñas se almacenan **hasheadas** (bcrypt)
- Los datos de prueba son **coherentes entre sí** (una sala referencia un complejo que existe, etc.)
- La clasificación de películas sigue el estándar **costarricense** (A, B, B15, C, D)
 
---
 
*Proyecto desarrollado para el curso EIF 211 — Universidad Nacional, Sede Región Brunca — 2026*
 
