import React, { useState } from 'react';

// Iconos sencillos usando SVG
const PlusIcon = () => (
  <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
);
const EditIcon = () => (
  <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
);
const TrashIcon = () => (
  <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
);
const CheckIcon = () => (
  <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
);

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const INITIAL_SUBJECTS = [
  { id: 1, name: 'Juego en E.I. (Teoría)', classroom: 'A19', color: 'bg-amber-300 text-slate-900 shadow-sm' },
  { id: 11, name: 'Juego en E.I. (Prácticas)', classroom: 'P. Rotger / A19', color: 'bg-amber-100 text-amber-900 border border-amber-300 shadow-sm' },
  { id: 2, name: 'Hab. Lingüística (Teoría)', classroom: 'A28', color: 'bg-rose-400 text-white shadow-sm' },
  { id: 22, name: 'Hab. Lingüística (Prácticas)', classroom: 'Alfonso A6', color: 'bg-rose-100 text-rose-900 border border-rose-300 shadow-sm' },
  { id: 3, name: 'Robótica (Teoría)', classroom: 'A03', color: 'bg-sky-400 text-white shadow-sm' },
  { id: 33, name: 'Robótica (Prácticas)', classroom: 'A12 / A1M', color: 'bg-sky-100 text-sky-900 border border-sky-300 shadow-sm' },
  { id: 4, name: 'Estrategia (Teoría)', classroom: 'A18', color: 'bg-emerald-400 text-slate-900 shadow-sm' },
  { id: 44, name: 'Estrategia (Prácticas)', classroom: 'A11', color: 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm' },
  { id: 5, name: 'Diversidad Cultural (Teoría)', classroom: 'A11', color: 'bg-purple-400 text-white shadow-sm' },
  { id: 55, name: 'Diversidad Cultural (Prácticas)', classroom: 'A11', color: 'bg-purple-100 text-purple-900 border border-purple-300 shadow-sm' },
  { id: 6, name: 'Atención Educativa', classroom: 'A1M', color: 'bg-indigo-400 text-white shadow-sm' }
];

const INITIAL_SCHEDULE = [
  { id: 'l1', day: 'Lunes', startTime: '17:30', endTime: '19:00', subjectId: 44 },
  { id: 'l2', day: 'Lunes', startTime: '19:00', endTime: '20:30', subjectId: 55 },
  { id: 'm1', day: 'Martes', startTime: '08:30', endTime: '10:00', subjectId: 1 },
  { id: 'm2', day: 'Martes', startTime: '10:00', endTime: '12:00', subjectId: 22 },
  { id: 'm3', day: 'Martes', startTime: '11:30', endTime: '13:00', subjectId: 11 },
  { id: 'm4', day: 'Martes', startTime: '13:00', endTime: '14:30', subjectId: 33 },
  { id: 'm5', day: 'Martes', startTime: '16:00', endTime: '17:30', subjectId: 4 },
  { id: 'm6', day: 'Martes', startTime: '19:00', endTime: '20:30', subjectId: 6 },
  { id: 'x1', day: 'Miércoles', startTime: '11:30', endTime: '13:00', subjectId: 2 },
  { id: 'x2', day: 'Miércoles', startTime: '13:00', endTime: '14:30', subjectId: 3 },
  { id: 'x3', day: 'Miércoles', startTime: '14:30', endTime: '16:00', subjectId: 6 },
  { id: 'j1', day: 'Jueves', startTime: '10:00', endTime: '11:30', subjectId: 2 },
  { id: 'j2', day: 'Jueves', startTime: '10:00', endTime: '11:30', subjectId: 3 },
  { id: 'j3', day: 'Jueves', startTime: '14:30', endTime: '16:00', subjectId: 4 },
  { id: 'j4', day: 'Jueves', startTime: '15:00', endTime: '16:30', subjectId: 4 },
  { id: 'v1', day: 'Viernes', startTime: '08:30', endTime: '10:00', subjectId: 1 }
];

export default function App() {
  const [subjects] = useState(INITIAL_SUBJECTS);
  const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Práctica de Robótica', subject: 'Robótica (Prácticas)', date: 'Esta semana', done: false },
    { id: 2, title: 'Trabajo grupal Diversidad Cultural', subject: 'Diversidad Cultural (Prácticas)', date: 'Próxima semana', done: false }
  ]);
  const [notes, setNotes] = useState('Materiales para las dinámicas de Juego en Educación Infantil.');

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState({ day: 'Lunes', startTime: '09:00', endTime: '11:00' });
  const [selectedSubjectId, setSelectedSubjectId] = useState(INITIAL_SUBJECTS[0].id);

  const [activeTab, setActiveTab] = useState('todos');

  const filteredSchedule = schedule.filter(item => {
    const hour = parseInt(item.startTime.split(':')[0]);
    if (activeTab === 'mañana') return hour < 14;
    if (activeTab === 'tarde') return hour >= 14;
    return true;
  });

  const handleOpenAddModal = (day = 'Lunes') => {
    setEditingId(null);
    setSelectedSlot({ day, startTime: '09:00', endTime: '11:00' });
    setSelectedSubjectId(INITIAL_SUBJECTS[0].id);
    setModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setEditingId(item.id);
    setSelectedSlot({ day: item.day, startTime: item.startTime, endTime: item.endTime });
    setSelectedSubjectId(item.subjectId);
    setModalOpen(true);
  };

  const handleAddOrUpdateSlot = (e) => {
    e.preventDefault();
    if (editingId) {
      setSchedule(schedule.map(item => item.id === editingId ? {
        ...item,
        day: selectedSlot.day,
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        subjectId: parseInt(selectedSubjectId)
      } : item));
    } else {
      const newEntry = {
        id: Date.now().toString(),
        day: selectedSlot.day,
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
        subjectId: parseInt(selectedSubjectId)
      };
      setSchedule([...schedule, newEntry]);
    }
    setModalOpen(false);
  };

  const removeScheduleItem = (id) => {
    setSchedule(schedule.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans p-3 sm:p-4 md:p-6 w-full" style={{ backgroundColor: '#dccff4' }}>
      {/* Cabecera Adaptativa */}
      <header className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-sm border border-purple-200/60 mb-6 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-1">
            <span>✨ Bienvenida, Camelia • Grado en Educación Infantil</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Tu Horario Universitario</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Teoría, prácticas y recursos organizados en el móvil.</p>
        </div>

        {/* Filtros de turno táctiles */}
        <div className="flex bg-purple-100/70 p-1 rounded-xl gap-1 w-full sm:w-auto justify-center">
          <button 
            onClick={() => setActiveTab('todos')} 
            className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeTab === 'todos' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Completa
          </button>
          <button 
            onClick={() => setActiveTab('mañana')} 
            className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeTab === 'mañana' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            ☀️ Mañanas
          </button>
          <button 
            onClick={() => setActiveTab('tarde')} 
            className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeTab === 'tarde' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            🌙 Tardes
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Parrilla de Clases */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-sm border border-purple-200/60">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Parrilla de Clases y Prácticas</h2>
              <button 
                onClick={() => handleOpenAddModal('Lunes')}
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <PlusIcon /> Añadir Bloque Horario
              </button>
            </div>

            {/* Días adaptados a móvil (1 columna en móvil, 5 columnas en pantallas grandes) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {DAYS.map(day => {
                const dayClasses = filteredSchedule.filter(item => item.day === day).sort((a,b) => a.startTime.localeCompare(b.startTime));
                return (
                  <div key={day} className="bg-purple-50/50 rounded-xl p-3 border border-purple-100 flex flex-col gap-3">
                    <div className="text-center font-bold text-purple-900 pb-2 border-b border-purple-200 text-sm">
                      {day}
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {dayClasses.map(item => {
                        const subj = subjects.find(s => s.id === item.subjectId) || subjects[0];
                        return (
                          <div key={item.id} className={`${subj.color} p-3 rounded-xl shadow-sm relative group flex flex-col justify-between transition-transform`}>
                            <div>
                              <div className="text-[11px] opacity-90 font-semibold mb-0.5">{item.startTime} - {item.endTime}</div>
                              <div className="font-bold text-xs sm:text-sm leading-snug break-words">{subj.name}</div>
                              <div className="text-[11px] opacity-90 mt-1">Aula: {subj.classroom}</div>
                            </div>
                            
                            {/* Botones de Editar y Eliminar (visibles fácilmente en táctil y hover) */}
                            <div className="absolute top-2 right-2 flex gap-1 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => handleOpenEditModal(item)}
                                className="bg-black/20 hover:bg-black/40 p-1.5 rounded-lg text-white"
                                title="Editar bloque"
                              >
                                <EditIcon />
                              </button>
                              <button 
                                onClick={() => removeScheduleItem(item.id)}
                                className="bg-black/20 hover:bg-black/40 p-1.5 rounded-lg text-white"
                                title="Eliminar bloque"
                              >
                                <TrashIcon />
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {dayClasses.length === 0 && (
                        <div className="py-6 flex items-center justify-center text-xs text-purple-400 italic text-center">
                          Sin clases en este turno
                        </div>
                      )}
                    </div>

                    <button 
                      onClick={() => handleOpenAddModal(day)}
                      className="w-full py-2 border border-dashed border-purple-300 hover:border-purple-500 text-purple-600 hover:text-purple-700 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1 bg-white/70"
                    >
                      <PlusIcon /> Añadir hora
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tareas y Notas */}
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-sm border border-purple-200/60">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-slate-900 text-sm sm:text-base">Trabajos y Exámenes</h2>
              <button 
                onClick={() => {
                  const title = prompt("Título del trabajo o tarea:");
                  if(title) setTasks([...tasks, { id: Date.now(), title, subject: 'Diversidad Cultural (Prácticas)', date: 'Próxima semana', done: false }]);
                }}
                className="w-8 h-8 rounded-lg bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-700 transition-colors"
              >
                <PlusIcon />
              </button>
            </div>

            <div className="space-y-3">
              {tasks.map(t => (
                <div key={t.id} className="p-3.5 rounded-xl border border-purple-100 bg-purple-50/40 flex items-start gap-3">
                  <button 
                    onClick={() => setTasks(tasks.map(item => item.id === t.id ? {...item, done: !item.done} : item))}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition-colors ${t.done ? 'bg-purple-600 border-purple-600 text-white' : 'border-purple-300 bg-white'}`}
                  >
                    {t.done && <CheckIcon />}
                  </button>
                  <div className="flex-1">
                    <div className={`text-sm font-semibold ${t.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>{t.title}</div>
                    <div className="text-xs text-purple-600 font-medium mt-0.5">{t.subject} • {t.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-sm border border-purple-200/60">
            <h2 className="font-bold text-slate-900 text-sm sm:text-base mb-3">Ideas para el Aula y Recursos</h2>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-32 p-3 text-sm bg-purple-50/50 border border-purple-200 rounded-xl focus:outline-none focus:border-purple-400 resize-none text-slate-700"
              placeholder="Apunta ideas de cuentacuentos, materiales reciclados, dinámicas..."
            />
          </div>
        </div>
      </main>

      {/* Modal adaptado a móvil */}
      {modalOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-purple-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {editingId ? 'Editar Bloque de Clase' : 'Añadir Clase o Práctica'}
            </h3>
            <form onSubmit={handleAddOrUpdateSlot} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Día de la semana</label>
                <select 
                  value={selectedSlot.day}
                  onChange={(e) => setSelectedSlot({...selectedSlot, day: e.target.value})}
                  className="w-full p-2.5 bg-purple-50/50 border border-purple-200 rounded-xl text-sm"
                >
                  {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Hora Inicio</label>
                  <input 
                    type="time" 
                    value={selectedSlot.startTime}
                    onChange={(e) => setSelectedSlot({...selectedSlot, startTime: e.target.value})}
                    className="w-full p-2.5 bg-purple-50/50 border border-purple-200 rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Hora Fin</label>
                  <input 
                    type="time" 
                    value={selectedSlot.endTime}
                    onChange={(e) => setSelectedSlot({...selectedSlot, endTime: e.target.value})}
                    className="w-full p-2.5 bg-purple-50/50 border border-purple-200 rounded-xl text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Asignatura</label>
                <select 
                  value={selectedSubjectId}
                  onChange={(e) => setSelectedSubjectId(e.target.value)}
                  className="w-full p-2.5 bg-purple-50/50 border border-purple-200 rounded-xl text-sm"
                >
                  {subjects.map(s => <option key={s.id} value={s.id}>{s.name} (Aula: {s.classroom})</option>)}
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-purple-100 transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-colors"
                >
                  {editingId ? 'Guardar Cambios' : 'Guardar Bloque'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}