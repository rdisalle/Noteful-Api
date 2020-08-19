function makeNotesArray() {
    return [
      {
        id: 1,
        date_modified: '2029-01-22T16:28:32.615Z',
        name: 'First test note!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
        folder_id: 2
      },
      {
        id: 2,
        date_modified: '2029-01-22T16:28:32.615Z',
        name: 'Second test note!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
        folder_id: 2
      },
      {
        id: 3,
        date_modified: '2029-01-22T16:28:32.615Z',
        name: 'Third test note!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
        folder_id: 3
      },
      {
        id: 4,
        date_modified: '2029-01-22T16:28:32.615Z',
        name: 'Fourth test note!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
        folder_id: 3
      },
    ];
  }
  
  function makeMaliciousNote() {
    const maliciousNote = {
      id: 911,
      date_modified: new Date().toISOString(),
      folder_id: 3,
      name: 'Naughty naughty very naughty <script>alert("xss");</script>',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }
    const expectedNote = {
      ...maliciousNote,
      name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousNote,
      expectedNote,
    }
  }
  
  module.exports = {
    makeNotesArray,
    makeMaliciousNote,
  }