// ID ACTUAL
let currentID = 3;

// TAREAS
let tasks = [
    {id: 1, title: "Comprar la despensa", description: "Comprar la despensa del día (sólo atún, leche y pan).", dueDate: "2025-09-01", priority: "Media", completed: false},
    {id: 2, title: "Hacer la tarea de Simulación", description: "Hacer la tarea sino, no te deja entrar.", dueDate: "2025-09-01", priority: "Alta", completed: false},
];

// FUNCION PARA LAS ESTADISTICAS
function getStats() {
  // SI NO HAY TAREAS
  if (tasks.length === 0) {
    return {
      total: 0,
      completed: 0,
      pending: 0,
      byPriority: { High: 0, Medium: 0, Low: 0 },
      mostRecent: null,
      oldest: null,
      overdue: 0
    };
  }

  const today = new Date();
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // COMPLETAS/PENDIENTES
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  // PRIORIDADES (ALTA, MEDIA, BAJA)
  const byPriority = {
    Alta: tasks.filter(t => t.priority === "Alta").length,
    Media: tasks.filter(t => t.priority === "Media").length,
    Baja: tasks.filter(t => t.priority === "Baja").length
  };

  // ORDENAMIENTO DE FECHAS
  const tasksWithDates = tasks.filter(t => t.dueDate).sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  //MAS RECIENTE/ANTIGUA
  const oldest = tasksWithDates[0] || null;
  const mostRecent = tasksWithDates[tasksWithDates.length - 1] || null;

  //TAREAS EXPIRADAS
  const overdue = tasks.filter(t => {
  if (!t.dueDate || t.completed) return false;

  const due = new Date(t.dueDate);
  const dueOnly = new Date(due.getFullYear(), due.getMonth(), due.getDate());

  return dueOnly < todayOnly;
}).length;

  return {
    total: tasks.length,
    completed,
    pending,
    byPriority,
    mostRecent,
    oldest,
    overdue
  };
}

    

function getNextID(){
  return currentID++;
}

module.exports = {tasks, getNextID, getStats};