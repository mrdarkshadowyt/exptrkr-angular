let expenses = [];

    function showPage(id) {
      document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      if (id === 'summary') displaySummary();
      if (id === 'remove') displayRemove();
    }

    function addExpense() {
      const desc = document.getElementById('desc').value;
      const amount = document.getElementById('amount').value;
      const date = document.getElementById('date').value;
      if (!desc || !amount || !date) {
        alert('Please fill all fields');
        return;
      }
      expenses.push({ desc, amount, date });
      document.getElementById('desc').value = '';
      document.getElementById('amount').value = '';
      document.getElementById('date').value = '';
      alert('Expense Added');
    }

    function displaySummary() {
      const list = document.getElementById('summaryList');
      list.innerHTML = '';
      expenses.forEach(exp => {
        list.innerHTML += `<tr><td>${exp.desc}</td><td>${exp.amount}</td><td>${exp.date}</td></tr>`;
      });
    }

    function displayRemove() {
      const list = document.getElementById('removeList');
      list.innerHTML = '';
      expenses.forEach((exp, i) => {
        list.innerHTML += `<tr><td>${exp.desc}</td><td>${exp.amount}</td><td>${exp.date}</td><td><button onclick="deleteExpense(${i})">Delete</button></td></tr>`;
      });
    }

    function deleteExpense(index) {
      expenses.splice(index, 1);
      displayRemove();
    }