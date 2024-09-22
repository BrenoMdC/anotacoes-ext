document.getElementById('add').addEventListener('click', function() {
  const noteText = document.getElementById('note').value;
  if (noteText) {
    const noteItem = document.createElement('li');
    noteItem.textContent = noteText;
    noteItem.addEventListener('click', function() {
      document.getElementById('note').value = noteItem.textContent;
    });
    document.getElementById('notesList').appendChild(noteItem);
    document.getElementById('note').value = '';
  }
});

document.getElementById('save').addEventListener('click', function() {
  const notes = [];
  document.querySelectorAll('#notesList li').forEach(function(noteItem) {
    notes.push(noteItem.textContent);
  });
  chrome.storage.sync.set({ 'notes': notes }, function() {
    console.log('Anotações salvas');
  });
});

document.getElementById('delete').addEventListener('click', function() {
  const noteText = document.getElementById('note').value;
  const notesList = document.getElementById('notesList');
  notesList.childNodes.forEach(function(noteItem) {
    if (noteItem.textContent === noteText) {
      notesList.removeChild(noteItem);
    }
  });
  document.getElementById('note').value = '';
  chrome.storage.sync.set({ 'notes': Array.from(notesList.childNodes).map(item => item.textContent) }, function() {
    console.log('Anotação excluída');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get('notes', function(data) {
    if (data.notes) {
      data.notes.forEach(function(noteText) {
        const noteItem = document.createElement('li');
        noteItem.textContent = noteText;
        noteItem.addEventListener('click', function() {
          document.getElementById('note').value = noteItem.textContent;
        });
        document.getElementById('notesList').appendChild(noteItem);
      });
    }
  });
});
