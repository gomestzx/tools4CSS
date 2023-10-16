import React from 'react'
import Navbar from '../../components/Navbar'
import ColorInput from '../../components/ColorInput/ColorInput'
import { useControls } from '../../hooks/useControls'
import style from './styles.module.scss'
import DirectionButton from '../../components/DirectionButton/DirectionButton'
import Switch from 'react-switch';
import CopyButton from '../../components/CopyButton/CopyButton'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Footer from '../../components/Sections/Footer/Footer'



const TextGradient = () => {

    const {
        colorVariant1,
        setColorVariant1,
        colorVariant2,
        setColorVariant2,
        direction,
        setDirection,
        animated,
        setAnimated,
    } = useControls();

    return (
        <>
            <Navbar />
            <div className='w-full lg:w-4/6 mx-auto font-medium'>
                <div className='mt-4'>
                    <h1 className={`${animated ? style.animated : style.textGradient} lg:text-8xl text-center font-semibold`}
                        style={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent',
                            backgroundClip: 'text',
                            background: `linear-gradient(${direction}, ${colorVariant1}, ${animated ? colorVariant1 + ',' : ''
                                } ${colorVariant2} ${animated ? ',' + colorVariant2 : ''})`,
                        }}>Text Gradient</h1>
                </div>
                <div className='p-4 bg-slate-200 text-gray-700 flex gap-10 mt-4 flex-wrap rounded-md justify-center items-center font-prompt font-semibold'>
                    <ColorInput label='Color 1:' preview={colorVariant1} value={colorVariant1} onChange={(e) => setColorVariant1(e.target.value)} />
                    <ColorInput label='Color 2:' preview={colorVariant2} value={colorVariant2} onChange={(e) => setColorVariant2(e.target.value)} />
                    <DirectionButton />
                    <div className='flex items-center justify-center gap-4'>
                        <span>Animation:</span>
                        <Switch
                            checked={animated}
                            onChange={(
                                nextChecked: boolean | ((prevState: boolean) => boolean),
                            ) => {
                                setAnimated(nextChecked);
                                setDirection('-80deg');
                            }}
                            onColor='#fff'
                            onHandleColor='#0f54b4'
                            className='mt-0'
                            handleDiameter={10}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            offColor='#ffffff'
                            offHandleColor='#464852'
                            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                            height={20}
                            width={48}
                            id='material-switch'
                        />
                    </div>

                </div>

                <div className='w-full bg-slate-600 mt-4'>
                    <SyntaxHighlighter language="css" style={darcula}>
                        {`background: linear-gradient(${direction}, ${colorVariant1}, ${animated ? colorVariant1 + ',' : ''
                            } ${colorVariant2}${animated ? ', ' + colorVariant2 : ''
                            }); \nbackground: -webkit-linear-gradient(${direction}, ${colorVariant1}, ${animated ? colorVariant1 + ',' : ''
                            } ${colorVariant2}${animated ? ', ' + colorVariant2 : ''
                            });\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;\n${animated
                                ? 'background-size: 300% !important;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\nanimation: animated_text 10s ease-in-out infinite;\n-moz-animation: animated_text 10s ease-in-out infinite;\n-webkit-animation: animated_text 10s ease-in-out infinite;\n@keyframes animated_text {\n0% { background-position: 0px 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0px 50%; }} '
                                : ''
                            }`}
                    </SyntaxHighlighter>
                </div>

                <div className=''>
                    <CopyButton textToCopy={`background: linear-gradient(${direction}, ${colorVariant1}, ${animated ? colorVariant1 + ',' : ''
                        } ${colorVariant2}${animated ? ', ' + colorVariant2 : ''
                        });\nbackground: -webkit-linear-gradient(${direction}, ${colorVariant1}, ${animated ? colorVariant1 + ',' : ''
                        } ${colorVariant2}${animated ? ', ' + colorVariant2 : ''
                        });\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;\n${animated
                            ? 'background-size: 300% !important;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\nanimation: animated_text 10s ease-in-out infinite;\n-moz-animation: animated_text 10s ease-in-out infinite;\n-webkit-animation: animated_text 10s ease-in-out infinite;\n@keyframes animated_text {\n0% { background-position: 0px 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0px 50%; }} '
                            : ''
                        }`} />
                </div>

                <div className='w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg'>
                    <h1 className='font-semibold text-3xl'>What is Text Gradient Generator?</h1>
                    <br />
                    <p>A text gradient is a graphic design technique that involves applying a smooth color transition to specific text or words. Instead of solid text in a single color, text gradient creates an visually appealing effect by having the text blend gradually from one color to another, giving a sense of depth and dynamism. This is often achieved using a spectrum of colors or a custom color blend, and it can be a powerful way to make text elements in design projects stand out and captivate the viewer&apos;s attention. Text gradients are commonly used in various design applications, including web design, advertising, and branding, to create eye-catching and engaging typography.</p>                    <br />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TextGradient