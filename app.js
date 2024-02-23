document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesContainer = document.getElementById('notesContainer');

    addNoteBtn.addEventListener('click', function() {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            const noteElement = document.createElement('div');
            noteElement.className = 'alert alert-info';
            noteElement.textContent = noteText;
            notesContainer.appendChild(noteElement);
            noteInput.value = ''; // Limpiar el campo de entrada
        } else {
            alert('Por favor, escribe algo en la nota.');
        }
    });
});
