export interface Tarea {
  titulo: string;
  descripcion: string;
  estado: "Pendiente" | "En curso" | "Terminada" | "Cancelada";
  dificultad: number;
  vencimiento: Date | null;
  creacion: Date;
  ultimaEdicion: Date;
}

export function crearTarea(
  titulo: string,
  descripcion: string,
  estado: "Pendiente" | "En curso" | "Terminada" | "Cancelada",
  dificultad: number,
  vencimiento: string | null
): Tarea {
  return {
    titulo,
    descripcion,
    estado,
    dificultad,
    vencimiento: vencimiento ? new Date(vencimiento) : null,
    creacion: new Date(),
    ultimaEdicion: new Date(),
  };
}

export function dificultadConEstrellas(tarea: Tarea): string {
  return "⭐".repeat(tarea.dificultad);
}
