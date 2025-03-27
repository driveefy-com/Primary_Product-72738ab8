import  { useRef } from 'react'
import './styles/FleetManualOnboarding.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import ManualOnboardingFormSlides from './ManualOnboardingFormSlides';
import { manualOnboardingItem1, manualOnboardingItem2, manualOnboardingItem3, manualOnboardingItem4, manualOnboardingItem5One, manualOnboardingItem5Two } from '../../../common/form/FormData';
import ManualOnboardingSubmitSlide from './ManualOnboaringSubmitSlide';
function FleetManualOnboarding() {
    const swiperRef = useRef(null);
    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // Go to the next slide
        }
    };
    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // Go to the previous slide
        }
    };
    return (
        <div className='manual-onboarding-main-container'>
            <div className="manual-onboarding-header">
                Onboarding Fleet
            </div>
            <div className="swiper-container">
                <Swiper slidesPerView={1} spaceBetween={5} pagination={true} modules={[Pagination]} onSwiper={(swiper) => (swiperRef.current = swiper)} className='swiper'>
                    <SwiperSlide><ManualOnboardingFormSlides fleetData={manualOnboardingItem1} onClick={goToNextSlide} previous={goToPreviousSlide} pageNo={'1'} header={'Vehicle Data'} /></SwiperSlide>
                    <SwiperSlide><ManualOnboardingFormSlides fleetData={manualOnboardingItem2} onClick={goToNextSlide} previous={goToPreviousSlide} pageNo={'2'} header={'Registration certificate data'} /></SwiperSlide>
                    <SwiperSlide><ManualOnboardingFormSlides fleetData={manualOnboardingItem3} onClick={goToNextSlide} previous={goToPreviousSlide} pageNo={'3'} header={'Insurance Details'} /></SwiperSlide>
                    <SwiperSlide><ManualOnboardingFormSlides fleetData={manualOnboardingItem4} onClick={goToNextSlide} previous={goToPreviousSlide} pageNo={'4'} header={'Permit'} /></SwiperSlide>
                    <SwiperSlide>
                        <div className="manual-onboarding-page-five">
                            <ManualOnboardingFormSlides fleetData={manualOnboardingItem5One} onClick={goToNextSlide} previous={goToPreviousSlide} pageNo={'5'} header={'PUCC Details'} />
                            <ManualOnboardingFormSlides fleetData={manualOnboardingItem5Two} onClick={goToNextSlide}  pageNo={'5'} header={'Tax Details'} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><ManualOnboardingSubmitSlide previous={goToPreviousSlide}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default FleetManualOnboarding