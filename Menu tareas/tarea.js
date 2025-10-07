class Tarea {
  constructor(titulo, descripcion = "", estado = "Pendiente", dificultad = 1, vencimiento = null) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;     // Pendiente | En curso | Terminada | Cancelada
    this.dificultad = dificultad;
    this.vencimiento = vencimiento ? new Date(vencimiento) : null;
    this.creacion = new Date();
    this.ultimaEdicion = new Date();
  }

  getDificultadConEstrellas() {
    return "⭐".repeat(this.dificultad);
  }
}

module.exports = Tarea;
