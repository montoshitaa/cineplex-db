/**
 * SCRIPT DE RECREACIÓN ÍNTEGRA - PROYECTO CINEPLEX
 */

// 1. Seleccionar la base de datos
db = db.getSiblingDB('cineplex-db');

// 2. Limpiar datos previos
const colecciones = [
    'cadenas_cines', 'complejos', 'salas', 'peliculas', 
    'funciones', 'horarios', 'tarifas', 'promociones', 
    'asientos', 'clientes', 'reservas', 'boletos', 'historial'
];
colecciones.forEach(col => db[col].drop());

print("--- Iniciando carga de datos ---");

// 3. Cadenas de Cines
db.cadenas_cines.insertMany([
    {
        "_id": ObjectId("6501a1b2c3d4e5f678901234"),
        "nombre": "CineMark Costa Rica",
        "razon_social": "Inversiones Cinematográficas del Sur S.A.",
        "pais": "Costa Rica",
        "logo_url": "https://cdn.cinemark.com/logos/cr_logo.png",
        "contacto": { "email": "servicioalcliente@cinemarkca.com", "telefono": "+506 4000-2463", "sitio_web": "https://www.cinemarkca.com" },
        "servicios": ["Venta Online", "Dulcería VIP", "App Móvil"],
        "fecha_fundacion": ISODate("1984-06-15T00:00:00Z"),
        "fecha_inicio": ISODate("1998-11-20T00:00:00Z"),
        "zonas_geograficas": ["GAM"],
        "convenios": [{ "distribuidora": "Warner Bros", "fecha_inicio": ISODate("2024-01-01T00:00:00Z"), "estrenos_mes": 4, "porc_taquilla": 45.5, "generos": ["Acción"], "titulos_exclusivos": false }]
    },
    {
        "_id": ObjectId("6501a1b2c3d4e5f678905678"),
        "nombre": "Nova Cinemas",
        "razon_social": "Entretenimiento de Altura S.A.",
        "pais": "Costa Rica",
        "logo_url": "https://novacinemas.cr/logo.png",
        "contacto": { "email": "info@novacinemas.cr", "telefono": "+506 2299-9999", "sitio_web": "https://www.novacinemas.cr" },
        "servicios": ["Salas VIP", "IMAX"],
        "fecha_fundacion": ISODate("2010-03-10T00:00:00Z"),
        "fecha_inicio": ISODate("2010-05-01T00:00:00Z"),
        "zonas_geograficas": ["San José"],
        "convenios": []
    }
]);

// 4. Complejos
db.complejos.insertMany([
    {
        "_id": ObjectId("6602b2c3d4e5f67890123456"),
        "cadena_id": ObjectId("6501a1b2c3d4e5f678901234"),
        "nombre": "CineMark Multiplaza Escazú",
        "ubicacion": { "provincia": "San José", "canton": "Escazú", "distrito": "San Rafael", "direccion": "Multiplaza Escazú", "coordenadas": { "lat": 9.9367, "lng": -84.1481 } },
        "edificio": "Torre de Parqueo", "num_salas": 8, "estacionamiento": 1500, "servicios": ["XD", "D-Box"],
        "contacto": { "telefono": "+506 4000-2464", "email": "escazu@cinemarkca.com" }, "estado": "Activo"
    }
]);

// 5. Películas
db.peliculas.insertMany([
    {
        "_id": ObjectId("6703c1d2e3f4g5h678901111"),
        "titulo_org": "Taylor Swift: The Eras Tour", "titulo_esp": "Taylor Swift: The Eras Tour",
        "sinopsis": "El fenómeno cultural de la gira mundial en pantalla grande.", "duracion_min": 169,
        "generos": ["Música", "Documental"], "clasificacion": "TP", "pais_origen": "USA", "idioma_org": "Inglés",
        "directores": ["Sam Wrench"], "reparto": ["Taylor Swift"], "productora": "Taylor Swift Productions",
        "distribuidora": "AMC", "estreno_mundial": ISODate("2023-10-13T00:00:00Z"), "estreno_cr": ISODate("2023-10-13T00:00:00Z"),
        "estado": "En cartelera", "formatos_disponibles": ["2D", "IMAX"],
        "material_promocional": { "poster_url": "url_poster", "trailer_url": "url_trailer", "puntuaciones_criticas": [], "calificacion_publico": { "puntaje": 4.9, "total_votos": 25000 }, "imagenes_adicionales": [] }
    },
    {
        "_id": ObjectId("6703c1d2e3f4g5h678902222"),
        "titulo_org": "A Minecraft Movie", "titulo_esp": "Minecraft: La Película",
        "sinopsis": "Un extraño país de las maravillas cúbico.", "duracion_min": 105,
        "generos": ["Aventura", "Fantasía"], "clasificacion": "TP", "pais_origen": "USA", "idioma_org": "Inglés",
        "directores": ["Jared Hess"], "reparto": ["Jason Momoa", "Jack Black"], "productora": "Mojang",
        "distribuidora": "Warner Bros", "estreno_mundial": ISODate("2025-04-04T00:00:00Z"), "estreno_cr": ISODate("2025-04-03T00:00:00Z"),
        "estado": "Próximamente", "formatos_disponibles": ["2D", "3D"],
        "material_promocional": { "poster_url": "url_poster", "trailer_url": "url_trailer", "puntuaciones_criticas": [], "calificacion_publico": { "puntaje": 0, "total_votos": 0 }, "imagenes_adicionales": [] }
    }
]);

// 6. Salas
db.salas.insertMany([
    {
        "_id": ObjectId("6804d1e2f3g4h5i678901234"),
        "complejo_id": ObjectId("6602b2c3d4e5f67890123456"),
        "nombre": "Sala 1 - XD Premium", "tipo_sala": "Convencional", "zonas_disponibles": ["General", "Preferencial"],
        "capacidad": 180, "pantalla": ["Gigante XD"], "sonido": "Dolby Atmos", "proyector": "Laser 4K",
        "ultima_renovacion": ISODate("2023-11-15T00:00:00Z"),
        "asientos_config": { "filas": 12, "asientos_por_fila": 15, "total_asientos": 180, "accesibilidad": { "espacios_discapacidad": 4, "ubicacion": "Fila A" } }
    }
]);

// 7. Funciones
db.funciones.insertMany([
    {
        "_id": ObjectId("6905e1f2g3h4i5j678903333"),
        "sala_id": ObjectId("6804d1e2f3g4h5i678901234"),
        "pelicula_id": ObjectId("6703c1d2e3f4g5h678901111"),
        "complejo_id": ObjectId("6602b2c3d4e5f67890123456"),
        "cadena_id": ObjectId("6501a1b2c3d4e5f678901234"),
        "fecha_programada": ISODate("2026-04-15T00:00:00Z"), "hora_inicio": "18:30", "hora_fin": "21:16",
        "formato": "IMAX", "idioma": "Subtitulada", "estado": "Programada",
        "asientos_disponibles": 178, "asientos_vendidos": 2, "asientos_reservados": 0, "porcentaje_ocupacion": 1.1, "semana_programacion": "2026-W16"
    }
]);

// 8. Horarios
db.horarios.insertMany([
    {
        "_id": ObjectId("7006f1g2h3i4j5k678901234"),
        "funcion_id": ObjectId("6905e1f2g3h4i5j678903333"),
        "pelicula_id": ObjectId("6703c1d2e3f4g5h678901111"),
        "sala_id": ObjectId("6804d1e2f3g4h5i678901234"),
        "complejo_id": ObjectId("6602b2c3d4e5f67890123456"),
        "fecha_hora_inicio": ISODate("2026-04-15T18:30:00Z"), "hora_fin": "21:15", "duracion_total": 165, "tipo_tanda": "Normal", "activo": true
    }
]);

// 9. Tarifas
db.tarifas.insertMany([
    {
        "_id": ObjectId("7107g1b2c3d4e5f678901111"),
        "complejo_id": ObjectId("6602b2c3d4e5f67890123456"),
        "cadena_id": ObjectId("6501a1b2c3d4e5f678901234"),
        "tipo_sala": "IMAX", "tipo_tanda": "Normal", "dia_semana": ["Lunes", "Martes", "Miércoles"],
        "precios": [{ "categoria_cliente": "Adulto", "precio_base": 5000, "impuestos": 650, "total": 5650 }]
    }
]);

// 10. Promociones
db.promociones.insertMany([
    {
        "_id": ObjectId("7208h1b2c3d4e5f678902222"),
        "nombre": "Swiftie Discount", "descripcion": "50% de descuento para The Eras Tour.",
        "tipo_promocion": "Porcentaje", "valor": 50, "codigo_cupon": "ERASTOUR50",
        "filtros_aplicacion": { "cadena_id": ObjectId("6501a1b2c3d4e5f678901234"), "pelicula_id": ObjectId("6703c1d2e3f4g5h678901111"), "dias_semana": ["Viernes", "Sábado", "Domingo"], "tipo_sala": ["IMAX"], "tipo_tanda": "Nocturna" },
        "segmentación_cliente": { "solo_miembros": true, "nivel_lealtad_minimo": "Bronce", "puntos_requeridos": 500 },
        "control_uso": { "max_usos": 100, "monto_minimo_compra": 0, "usos_actuales": 12 },
        "vigencia": { "fecha_inicio": ISODate("2024-04-01T00:00:00Z"), "fecha_fin": ISODate("2024-04-30T23:59:59Z") },
        "estado": "Activa"
    }
]);

// 11. Clientes
db.clientes.insertMany([
    {
        "_id": ObjectId("7309i1b2c3d4e5f678901111"),
        "identificacion": { "tipo": "Cédula Nacional", "numero": "1-0987-0654" },
        "nombre": "Hairol", "apellidos": "Romero", "genero": "M", "email": "hairol.romero@email.com",
        "contraseña": "hashed_password_789", "telefono": "8345-1234", "fecha_nacimiento": ISODate("1990-08-15T00:00:00Z"),
        "programa_lealtad": { "puntos_acumulados": 1500, "nivel": "Oro", "generos_preferidos": ["Acción"], "complejo_habitual_id": ObjectId("6602b2c3d4e5f67890123456") }
    },
    {
        "_id": ObjectId("7309i1b2c3d4e5f678902222"),
        "identificacion": { "tipo": "Cédula Residencia", "numero": "155800012345" },
        "nombre": "Matteo", "apellidos": "Vargas", "genero": "M", "email": "matteo.vargas@email.com",
        "contraseña": "hashed_password_abc", "telefono": "6012-9876", "fecha_nacimiento": ISODate("2002-03-10T00:00:00Z"),
        "programa_lealtad": { "puntos_acumulados": 450, "nivel": "Plata", "generos_preferidos": ["Comedia"], "complejo_habitual_id": ObjectId("6602b2c3d4e5f67890123456") }
    }
]);

// 12. Asientos
db.asientos.insertMany([
    {
        "_id": ObjectId("8801a1b2c3d4e5f678901111"),
        "sala_id": ObjectId("6804d1e2f3g4h5i678901234"), "funcion_id": ObjectId("6905e1f2g3h4i5j678903333"),
        "fila": "F", "numero": 10, "zona": "Preferencial", "tipo_asiento": "Reclinable", "precio_asociado": 5650, "discapacidad": false, "estado": "Vendido"
    }
]);

// 13. Reservas
db.reservas.insertMany([
    {
        "_id": ObjectId("7410j1b2c3d4e5f678901111"),
        "cliente_id": ObjectId("7309i1b2c3d4e5f678901111"),
        "funcion_id": ObjectId("6905e1f2g3h4i5j678903333"),
        "pelicula_id": ObjectId("6703c1d2e3f4g5h678901111"),
        "complejo_id": ObjectId("6602b2c3d4e5f67890123456"),
        "cadena_id": ObjectId("6501a1b2c3d4e5f678901234"),
        "promocion_id": ObjectId("7208h1b2c3d4e5f678902222"),
        "fecha_reserva": ISODate("2026-04-10T18:40:00Z"),
        "asientos": [{ "asiento_id": ObjectId("8801a1b2c3d4e5f678901111"), "precio": 2825, "tarifa_id": ObjectId("7107g1b2c3d4e5f678901111") }],
        "estado": "Confirmada", "total": 2825,
        "informacion_pago": { "metodo": "Tarjeta", "tarjeta_titular": "Hairol Romero", "tipo_tarjeta": "Visa" },
        "pin_retiro": 4589, "expiracion": ISODate("2026-04-10T19:00:00Z")
    }
]);

// 14. Boletos
db.boletos.insertMany([
    {
        "_id": ObjectId("7511k1b2c3d4e5f678901111"),
        "reserva_id": ObjectId("7410j1b2c3d4e5f678901111"), "codigo_qr": "QR_SWIFT_HAIROL",
        "nombre_cadena": "CineMark", "nombre_complejo": "CineMark Multiplaza Escazú",
        "titulo_pelicula": "Taylor Swift: The Eras Tour", "fecha_hora_funcion": ISODate("2026-04-15T18:30:00Z"),
        "nombre_sala": "Sala 1 - XD Premium", "asiento_etiqueta": "Fila F - Butaca 10",
        "tipo_cliente": "Adulto", "precio_pagado": 2825, "nombre_cliente": "Hairol Romero",
        "fecha_emision": ISODate("2026-04-10T18:41:00Z"), "modalidad_entrega": "Digital", "estado": "Emitido"
    }
]);

// 15. Historial de Redenciones
db.historial.insertMany([
    {
        "_id": ObjectId("7612l1b2c3d4e5f678901111"),
        "promocion_id": ObjectId("7208h1b2c3d4e5f678902222"),
        "cliente_id": ObjectId("7309i1b2c3d4e5f678901111"),
        "reserva_id": ObjectId("7410j1b2c3d4e5f678901111"),
        "fecha_hora": ISODate("2026-04-10T18:41:00Z"), "monto_descontado": 2825, "estado": "Aplicada"
    }
]);

print("--- Carga finalizada con éxito ---");
