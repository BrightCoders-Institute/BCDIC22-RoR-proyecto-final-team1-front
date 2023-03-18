import './Gmap.css'; // main style file

export default function Gmap() {
  return (
    <div className='layout-mapa'>
      <h2 className='mb-5 font-bold text-2xl'>Donde vas a estar</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.028284665341!2d-103.73069428470345!3d19.28113615050185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255ac0cb7baabd%3A0x49107047fc2c8c23!2sMagmaLabs!5e0!3m2!1ses!2sco!4v1679130610478!5m2!1ses!2sco"
        width="100%" height="450" 
        allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}