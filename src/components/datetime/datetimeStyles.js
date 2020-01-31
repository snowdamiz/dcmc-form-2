import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const DatetimeWrap = styled.section`
    width: 100%;
    min-height: 100%;
    // border: 1px solid blue;
    box-shadow: 0px 0px 10px #B7B7B7;
    // position: absolute; 
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        overflow-y: auto;
    }
`;

    export const DatetimeBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin-top: 30px;
        margin-bottom: 20px;

        ${media.phone} {
            width: 360px;
        }
        
        ${media.tablet} {
            width: 440px;
        }

        ${media.largeTablet} {
            margin-top: 40px;
        }

        ${media.modern} {
            margin-top: 50px;
        }

        .head {
            font-family: ${fonts.text};
            font-size: 16px;
            font-weight: bold;
            color: ${colors.green};
            align-self: flex-start;
            margin-bottom: 8px;
    
            ${media.largeTablet} {
                font-size: 18px;
                margin-bottom: 10px;
            }

            ${media.desktop} {
                font-size: 20px;
                margin-bottom: 14px;
            }
        }

        // CALENDAR
        .react-calendar {
            border: none;
            // box-shadow: 0px 0px 10px #CDCDCD;
            border: 1px solid ${colors.gray};
            width: 100%;
            margin-bottom: 15px;

            // CALENDAR NAVIGATION
            .react-calendar__navigation {
                margin-top: 14px;
                border: none;
                height: 28px;

                .react-calendar__navigation__label {
                    background-color: ${colors.white};
                    border: none;
                    font-size: 15px;
                    color: ${colors.primaryDark};
                    font-family: ${fonts.heading};
                    font-weight: 800;
                }

                .react-calendar__navigation__arrow {
                    width: 30px;
                    height: 30px;
                    background-color: ${colors.white};
                    color: ${colors.darkGray};
                    border: none;
                    font-size: 16px;
                }
            }

            // MONTH VIEW - HEADER
            .react-calendar__month-view {
                .react-calendar__month-view__weekdays {
                    height: 46px;
                    background-color: #f2f2f2;

                    .react-calendar__month-view__weekdays__weekday {
                        text-align: center;
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: center;
                        align-items: center;

                        abbr {
                            text-decoration: none;
                            font-family: ${fonts.text};
                        }
                    }
                }

                // TILES
                .react-calendar__month-view__days {
                    .cal_tile {
                        background-color: ${colors.white};
                        height: 40px;

                        ${media.tablet} {
                            height: 50px;
                            font-size: 16px;
                        }
                    }

                    .react-calendar__month-view__days__day--weekend {
                        color: ${colors.green};
                    }

                    .react-calendar__tile--active {
                        color: ${colors.white};
                        background-color: ${colors.green};
                    }

                    .react-calendar__tile {
                        border: none;
                        height: 40px;
                        font-size: 14px;
                        font-family: ${fonts.text};

                        &:disabled {
                            color: ${colors.darkGray};

                            &:hover {
                                background-color: #fff;
                                color: ${colors.darkGray};
                            }
                        }

                        &:hover {
                            background-color: ${colors.primaryDark};
                            color: #fff;
                        }
                        
                        ${media.tablet} {
                            height: 48px;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    `;

    export const TimesBox = styled.section`
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    `;

        export const TimesSec = styled.section`
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;

            .activeTime {
                border: 1px solid ${colors.green};
                background-color: ${colors.green};
                color: ${colors.white};
                font-weight: 800;
            }
        `;

            export const TimeBtn = styled.button`
                width: 30%;
                border: 1px solid ${colors.gray};
                height: 30px;
                padding-top: 2px;
                font-family: ${fonts.text};
                font-size: 13px;
                font-weight: 700;
                color: ${colors.dark};

                ${media.tablet} {
                    height: 34px;
                }

                &:hover {
                    border: 1px solid ${colors.green};
                    background-color: ${colors.green};
                    color: ${colors.white};
                    font-weight: 800;
                }
            `;

    export const ErrorMSG = styled.span`
        font-size: 13px;
        font-family: ${fonts.text};
        color: red;
        text-align: left;
        align-self: flex-start;
        padding-bottom: 8px;
        margin: 8px 0 0 0;
    `;