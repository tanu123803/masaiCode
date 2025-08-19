// simple in-memory array as "DB"
let items = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Burger' },
];

function getAll() {
  return items;
}

function getById(id) {
  return items.find(i => i.id === id);
}

function add(item) {
  const nextId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
  const newItem = { id: nextId, ...item };
  items.push(newItem);
  return newItem;
}

function update(id, data) {
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  return items[idx];
}

function remove(id) {
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, add, update, remove };
