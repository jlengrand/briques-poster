import html2canvas from 'html2canvas';

html2canvas(document.body).then((canvas) => {
  document.body.appendChild(canvas);
});
