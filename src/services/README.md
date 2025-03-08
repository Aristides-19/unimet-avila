#### 1. **Colección: `users`**

- **Descripción:** Almacena la información de los usuarios registrados en la plataforma, ya sean estudiantes, guías o
  administradores.
- **Campos:**

    - `userId` (String): Identificador único del usuario.
    - `email` (String): Correo electrónico del usuario.
    - `name` (String): Nombre completo del usuario.
    - `bio` (String): Biografía del usuario (aplica a `Estudiante` y `Guía`).
    - `phone` (String): Número de teléfono del usuario.
    - `genre` (String): Género del usuario (`Masculino`, `Femenino`, `N/A`).
    - `role` (String): Rol del usuario (`Estudiante`, `Guía`, `admin`).
    - `profilePicture` (String): URL de la foto de perfil del usuario en Supabase (aplica a `Estudiante` y `Guía`).
    - `bannerPicture` (String): URL de la foto de perfil del usuario en Supabase (aplica a `Estudiante` y `Guía`).
    - `excursionsHistory` (Array[Reference]): Lista de excursiones o reservas si es `Estudiante` del usuario distinguido
      por `createdAt`(referencias a `excursions`).
    - `forumEntries` (Array[Reference]): Lista de preguntas/respuestas del usuario distinguidas por `type`(referencias
      a `forumEntry`).
    - `likes` (Array[Reference]): Lista de likes en el foro (referencias a `forumEntry`).

#### 2. **Colección: `excursions`**

- **Descripción:** Almacena la información de las excursiones disponibles en la plataforma.
- **Campos:**

    - `excursionId` (String): Identificador único de la excursión.
    - `meetingLocation` (Geopoint): Punto de encuentro de la excursión.
    - `title` (String): Título de la excursión.
    - `description` (String): Descripción detallada de la excursión.
    - `type` (String): Dificultad de la excursión (`Ligero`, `Avanzado`, `Extremo`).
    - `duration` (Number): Duración estimada de la excursión en horas.
    - `date` (Timestamp): Fecha y hora de la excursión.
    - `route` (String): Ruta de la excursión.
    - `price` (Number): Precio de la excursión.
    - `haveLunch` (Boolean): Dice si la excursión incluye el almuerzo.
    - `images` (Array[String]): URL de las fotos relacionadas con la excursión en Supabase, máximo de 5.
    - `guideId` (Reference): Referencia al guía asignado a la excursión (referencia a `users`).
    - `maxStudents` (Number): Número máximo de estudiantes.
    - `enrolledStudents` (Array[Reference]): Lista de estudiantes que han reservado/participaron (referencias a
      `users`).
    - `status` (String): Estado de la excursión (`Disponible`, `Finalizada`).
    - `averageRating` (Number): Calificación promedio de la excursión.

- **Subcolección: `reviews`**

    - **Descripción:** Almacena las reseñas y calificaciones de los usuarios que han participado en la excursión.
    - **Campos:**
    - `reviewId` (String): Identificador único de la reseña.
    - `studentId` (Reference): Referencia al estudiante que escribió la reseña (referencia a `users`).
    - `rating` (Number): Calificación de la excursión (1-5).
    - `comment` (String): Comentario del usuario sobre la excursión.
    - `createdAt` (Timestamp): Fecha de creación de la reseña.

#### 4. **Colección: `blogPosts`**

- **Descripción:** Almacena los artículos educativos y noticias publicados por los administradores.
- **Campos:**
    - `postId` (String): Identificador único del artículo.
    - `authorId` (Reference): Identificador del administrador que escribió el artículo (referencia a `users`).
    - `title` (String): Título del artículo.
    - `content` (String): Contenido del artículo.
    - `createdAt` (Timestamp): Fecha de creación del artículo.
    - `category` (String): Etiquetas relacionadas con el artículo (ej. `senderismo`, `conservación`).

#### 4. **Colección: `forumEntry`**

- **Descripción:** Almacena las preguntas/respuestas de estudiantes/guías en el foro.
- **Campos:**
    - `entryId` (String): Identificador único de la entrada.
    - `authorId` (Reference): Identificador del autor de la entrada (referencia a `users`).
    - `content` (String): Contenido de la entrada.
    - `createdAt` (Timestamp): Fecha de creación de la entrada.
    - `type` (String): Tipo de entrada (`question`, `answer`).
    - `title` (String): Título de la pregunta (aplica a `question`).
    - `likes` (Array[Reference]): Likes de la pregunta (aplica a `question`).
    - `parentId` (Reference): Pregunta a la que responde (aplica a `answer` con referencia a `forumEntry`).
