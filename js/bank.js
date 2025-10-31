const button = document.getElementById('showQrButton');
const qrContainer = document.getElementById('qrContainer');

if (button && qrContainer) {
  let isVisible = false;

  button.addEventListener('click', e => {
    e.preventDefault();
    isVisible = !isVisible;

    if (isVisible) {
      // Hiển thị popup với hiệu ứng
      qrContainer.style.display = 'block';
      requestAnimationFrame(() => {
        qrContainer.classList.add('show');
      });
    } else {
      // Ẩn popup với hiệu ứng
      qrContainer.classList.remove('show');
      qrContainer.classList.add('hide');
      
      // Đợi hiệu ứng kết thúc mới ẩn hẳn (không bị “nhảy”)
      qrContainer.addEventListener('animationend', function handler() {
        if (!isVisible) qrContainer.style.display = 'none';
        qrContainer.classList.remove('hide');
        qrContainer.removeEventListener('animationend', handler);
      });
    }
  });
}
