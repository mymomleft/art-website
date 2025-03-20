document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const artGallery = document.getElementById('artGallery');

  // Fetch and display art
  async function fetchArt() {
    const response = await fetch('/api/art');
    const artList = await response.json();
    artGallery.innerHTML = artList.map(art => `
      <div class="art-item">
        <img src="/uploads/${art.filename}" alt="${art.description}">
        <div class="stars">
          ${[1, 2, 3, 4, 5].map(star => `
            <span data-art-id="${art._id}" data-rating="${star}">&#9733;</span>
          `).join('')}
        </div>
        <p>${art.description}</p>
      </div>
    `).join('');
  }

  // Handle art upload
  uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      fetchArt();
      uploadForm.reset();
    }
  });

  // Handle rating
  artGallery.addEventListener('click', async (e) => {
    if (e.target.tagName === 'SPAN') {
      const artId = e.target.getAttribute('data-art-id');
      const rating = e.target.getAttribute('data-rating');
      await fetch(`/api/rate/${artId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating }),
      });
      fetchArt();
    }
  });

  fetchArt();
});
const artData = [
  { id: 1, image: "/images/art1.jpg", description: "Art 1" },
  { id: 2, image: "/images/art2.png", description: "Art 2" },
];

const artGallery = document.getElementById('artGallery');
artData.forEach(art => {
  const artItem = document.createElement('div');
  artItem.className = 'art-item';
  artItem.innerHTML = `
    <img src="${art.image}" alt="${art.description}">
    <div class="stars">
      ${[1, 2, 3, 4, 5].map(star => `
        <span data-art-id="${art.id}" data-rating="${star}">&#9733;</span>
      `).join('')}
    </div>
    <p>${art.description}</p>
  `;
  artGallery.appendChild(artItem);
});