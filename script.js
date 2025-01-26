// Ambil elemen model-viewer
const modelViewer = document.querySelector('model-viewer');

// Cek apakah model-viewer ada
if (modelViewer) {
  console.log('Model viewer ditemukan');
} else {
  console.error('Model viewer tidak ditemukan!');
}

// Event listener untuk interaksi dengan model
modelViewer.addEventListener('click', () => {
  console.log('Model 3D telah dipilih!');
  alert('Model 3D telah dipilih!');
});

// Atur posisi kamera untuk model 3D
modelViewer.cameraOrbit = "0deg 90deg 0.8m"; // Mengatur posisi kamera
