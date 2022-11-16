import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import './Modules/modules.scss';

import Accordion from '../Components/Accordion';

const Modulepage = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
      id: 1,
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
      id: 2,
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
      id: 3,
    },
  ];

  return (
    <main className="main">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay, Navigation, EffectFade, Pagination]}
              Controller
              autoplay
              loop
              speed={300}
              navigation
              scrollbar={{ draggable: true }}
              pagination
            >
              <SwiperSlide className="p_diferent">Slide 1 </SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 2</SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 3</SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 4</SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 1 </SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 2</SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 3</SwiperSlide>
              <SwiperSlide className="p_diferent">Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div>
        <div className="accordion">
          {accordionData.map(({ title, content, id }) => (
            <Accordion title={title} content={content} key={id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Modulepage;
