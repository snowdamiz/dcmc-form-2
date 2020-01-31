import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const DetailsWrap = styled.section`
    width: 100%;
    min-height: 100%;
    // border: 1px solid blue;
    box-shadow: 0px 0px 10px #B7B7B7;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        overflow-y: auto;
    }
`;

    export const DetailsBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 270px;
        margin-top: 30px;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }

        ${media.largeTablet} {
            width: 420px;
            margin-top: 40px;
        }

        ${media.modern} {
            width: 440px;
            margin-top: 50px;
        }

        .primary {
            margin-top: 10px;
        }

        .addr_head {
            font-family: ${fonts.text};
            font-size: 16px;
            font-weight: bold;
            color: ${colors.green};
            align-self: flex-start;
            margin-bottom: 8px;
            margin-left: -10px;

            &:nth-of-type(2) {
                margin-top: 16px;
            }

            ${media.largeTablet} {
                font-size: 18px;
                margin-bottom: 10px;
            }

            ${media.desktop} {
                font-size: 20px;
                margin-bottom: 14px;
            }
        }
    `;

        export const ErrorMSG = styled.span`
            font-size: 13px;
            font-family: ${fonts.text};
            color: red;
            text-align: left;
            align-self: flex-start;
            padding-bottom: 5px;
            margin: 6px 0 0 -10px;
        `;

        export const Input = styled.input`
            width: 100%;
            height: 40px;
            border: 1px solid #D7D7D7;
            margin-bottom: 12px;
            border-radius: 3px;
            background-color: #f8f8f8;
            color: gray;
            padding: 0 10px;
            font-family: ${fonts.text};

            ${media.largeTablet} {
                margin-bottom: 10px;
            }

            ${media.modern} {
                margin-bottom: 15px;
            }
        `;

        export const Textarea = styled.textarea`
            width: 100%;
            height: 100px;
            border: 1px solid #D7D7D7;
            border-radius: 3px;
            background-color: #f8f8f8;
            color: gray;
            padding: 10px;
            font-family: ${fonts.text};
        `;
    
    export const SubmitBox = styled.section`
        width: 100%;
        padding: 20px 0;
        background-color: #f5f5f5;
        position: absolute;
        bottom: 0;
        display: flex;
        flex-flow: colum nowrap;
        justify-content: center;
        align-items: center;
    `;

        export const SubmitBtn = styled.button`
            width: 140px;
            height: 40px;
            border: none;
            background-color: ${colors.green};
            bottom: 30px;
            color: ${colors.white};
        `;

    export const CTA = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 270px;
        margin-top: 50px;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }

        ${media.largeTablet} {
            width: 420px;
            margin-top: 60px;
        }

        ${media.modern} {
            width: 440px;
        }

        h1 {
            font-size: 22px;
            font-weight: bold;
            color: ${colors.green};
            font-family: ${fonts.heading};
            line-height: 25px;
            text-align: center;

            &:nth-of-type(2) {
                margin-top: 28px;
                font-size: 18px;
            }
        }

        .line {
            width: 100px;
            height: 2px;
            background-color: ${colors.green};
            margin-top: 30px;
        }

        .cto_btn {
            width: 130px;
            height: 36px;
            background-color: ${colors.green};
            font-family: ${fonts.text};
            font-weight: 600;
            color: ${colors.white};
            border: 1px solid ${colors.green};
            margin-top: 30px;

            ${media.largeTablet} {
                height: 38px;
            }

            ${media.modern} {
                height: 42px;
            }
        }
    `;