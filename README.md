# 🌍 App de Países y Medallas 🏅

Aplicación desarrollada para **WorldSkills Colombia – Tecnologías Web**, enfocada en la gestión eficiente de países y medallas. Combina una experiencia intuitiva, diseño responsive y una arquitectura sólida basada en Laravel y React.

---

## 🚀 Tecnologías Usadas

### 🔧 Backend (Laravel)

- Laravel 10
- MySQL
- Eloquent ORM
- API RESTful
- Migraciones y validación de datos

### 🎨 Frontend (React)

- React + Vite
- Axios para peticiones HTTP
- Bootstrap 5 + React-Bootstrap
- Diseño totalmente responsive

---

## ✅ Ventajas de esta aplicación

- 🎯 Cumple exactamente con los requisitos planteados
- 📱 Diseño responsive en todos los dispositivos
- 🧠 Interfaz clara, intuitiva y amigable
- ⚙️ Comunicación fluida con el backend vía API REST
- 🔄 Actualización dinámica de datos sin recargar la página
- 🧩 Arquitectura modular: código limpio y mantenible

---

---

## 👨‍💻 Autor

**Diego Alejandro Paloma Díaz**

- 💼 Competidor en WorldSkills Colombia – Tecnologías Web
- 🌐 [GitHub: @palomaelmejor](https://github.com/palomaelmejor)
- 📧 diegopalomadiaz@gmail.com *(si deseas mostrar tu correo)*


## 🛠️ Instalación y Ejecución

### 🔹 Clonar el repositorio

```bash
git clone https://github.com/Diegoalejandro17/Gestion-de-medallas-y-pasies
cd tu_repositorio

🔹 Configurar el Backend
bash
Copiar
Editar
cd back
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
🔹 Configurar el Frontend
bash
Copiar
Editar
cd ../front
npm install
npm run dev

🔹 Crea un archivo .env en la carpeta front/ con el siguiente contenido:
env
Copiar
Editar
VITE_API_URL=http://127.0.0.1:8000/api


