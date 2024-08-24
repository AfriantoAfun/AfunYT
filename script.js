document.getElementById('downloadBtn').addEventListener('click', function() {
    const videoURL = document.getElementById('videoURL').value;
    if (videoURL) {
        document.getElementById('result').innerHTML = `
            <p>Fitur ini belum tersedia karena keterbatasan hosting statis. 
            Namun, Anda dapat menggunakan layanan lain seperti Y2Mate untuk mendownload video.</p>
        `;
    } else {
        alert('Please enter a YouTube URL');
    }
});
