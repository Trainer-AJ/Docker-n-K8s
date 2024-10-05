const quotes = [
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"Believe you can and you’re halfway there." - Theodore Roosevelt',
    '"Do not wait to strike till the iron is hot, but make it hot by striking." - William Butler Yeats',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer',
    '"It always seems impossible until it’s done." - Nelson Mandela'
  ];
  
  function changeQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector('.quote').textContent = randomQuote;
  }
  