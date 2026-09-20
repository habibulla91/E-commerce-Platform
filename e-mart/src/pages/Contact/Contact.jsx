
import TopHeader from './../../components/header/TopHeader';
import PrimaryButton from './../../components/UIKIT/PrimaryButton';
function Contact() {
    return (
        <div className='w-full max-w-[--max-width]'>
            <div>
                    <TopHeader />
                </div>
            <div  className='w-[90%] mx-auto'>
                
                <div className='grid grid-cols-4 mt-5 gap-5'>
                    <div className='rounded p-5 border'>
                        <div>
                            <i className="bi bi-geo-alt text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Our location</h2>
                            <p className='text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias dolores in architecto! </p>
                        </div>
                    </div>
                    <div className='rounded p-5 border'>
                        <div>
                            <i className="bi bi-telephone-fill text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Phone Number</h2>
                            <p className='text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias dolores in architecto! </p>
                        </div>
                    </div>
                    <div className='rounded p-5 border'>
                        <div>
                            <i className="bi bi-envelope-fill text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Email Address</h2>
                            <p className='text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat alias dolores in architecto! </p>
                        </div>
                    </div>
                    <div className='rounded p-5 border'>
                        <div>
                            <i className="bi bi-headset text-[var(--salmon-pink)] font-semibold text-[length:var(--fs-1)] w-12 h-12 inline-flex items-center justify-center  rounded-full bg-[#fee8ea]"></i>
                        </div>
                        <div>
                            <h2 className='font-bold my-1'>Live Chat</h2>
                            <p className='my-1 text-[length:var(--fs-9)] text-[var(--sonic-silver)]'>Chat with us for instant help </p>
                            <PrimaryButton btnTxt={<i className="bi bi-chat-right-text text-white font-semibold inline-flex items-center justify-center"><span className="ml-2">Start Chat</span></i>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
