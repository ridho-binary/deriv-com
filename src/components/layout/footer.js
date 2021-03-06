// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled from 'styled-components'
import { Container, CssGrid, Show, Flex } from '../containers'
import { Text, StyledLink, Accordion, AccordionItem } from '../elements'
import { LocationContext } from './location-context'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/deriv-footer.svg'
import CopyrightIc from 'images/svg/copyright.svg'
import Twitter from 'images/svg/footer-twitter.svg'
import Instagram from 'images/svg/footer-instagram.svg'
import Facebook from 'images/svg/footer-facebook.svg'
import Linkedin from 'images/svg/footer-linkedin.svg'

const StyledFooter = styled.footer`
    background-color: var(--color-grey-25);
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${(props) => (props.has_banner_cookie ? '18.4rem' : '0')};

    ${Container} {
        @media ${device.tabletL} {
            width: 100%;
        }
    }
`
const StyledGrid = styled(CssGrid)`
    width: 100%;
    grid-template-columns: 2fr;
    grid-template-areas:
        'logo logo'
        'links links'
        'disclaimer disclaimer'
        'copyright social';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas:
            'logo'
            'links'
            'social'
            'disclaimer'
            'copyright';
    }
`
const DerivLogoWrapper = styled.div`
    grid-area: logo;
    background: var(--color-grey-25);
    padding: 4rem 0 2rem 0;

    svg {
        width: 182px;
    }
    @media ${device.tabletL} {
        margin-left: 2rem;
    }
`
const LinksWrapper = styled.div`
    grid-area: links;
    background: var(--color-grey-25);
    padding: 0.8rem 0 2.4rem 0;
    border-bottom: 1px solid var(--color-grey-26);
    border-top: 2px solid var(--color-grey-26);

    @media ${device.tabletL} {
        padding: 0;
    }
`
const LinksCol = styled(Flex)`
    flex-direction: column;
    width: fit-content;
`

const Title = styled(Text)`
    color: var(--color-black-6);
    font-weight: bold;
`
const Link = styled(StyledLink)`
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    line-height: 1.5;
`
const LinkWrapper = styled.div`
    margin-top: ${(props) => (props.first_child == 'true' ? '0.8rem' : '1.6rem')};

    @media ${device.laptopM} {
        ${Title} {
            font-size: var(--text-size-xs);
        }
        ${Link} {
            font-size: var(--text-size-xs);
        }
    }
`
const Disclaimer = styled.div`
    grid-area: disclaimer;
    background: var(--color-grey-25);
`
const DisclaimerParagraph = styled(Text)`
    font-size: var(--text-size-xs);
    margin-top: ${(props) => (props.no_margin == 'true' ? '0' : '2.4rem')};

    @media ${device.tabletL} {
        width: 90%;
        margin: 2rem auto 0;
        font-size: var(--text-size-sm);
    }
`
const StaticAsset = styled.a`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const RiskWarning = styled.div`
    background-color: var(--color-grey-28);
    border-left: 4px solid var(--color-grey-27);
    padding: 1.6rem;
    margin-top: 2rem;

    @media ${device.tabletL} {
        border-top: 2px solid var(--color-grey-27);
        border-left: none;
        width: 90%;
        margin: 4rem auto 0;
        padding: 1rem;

        p {
            padding: 0;
            margin: 0;
            width: 100%;
        }
    }
`

const BoldLink = styled(StyledLink)`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const Copyright = styled(Flex)`
    grid-area: copyright;
    background: var(--color-grey-25);
    justify-content: flex-start;
    align-items: center;

    p {
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }

    @media ${device.tabletL} {
        width: 90%;
        margin: 0 auto;
        padding: 2rem 0;

        p {
            font-size: 1.75rem;
            line-height: 1.5;
        }
    }
`
const SocialWrapper = styled.div`
    grid-area: social;
    background: var(--color-grey-25);
    margin: 1.6rem 0;

    svg {
        margin-left: 1.6rem;
    }

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1rem;

        a:first-child {
            svg {
                margin-left: 0;
            }
        }
    }
`
const ExternalLink = styled.a`
    text-decoration: none;
`
const MobileAccordion = styled.section`
    background-color: var(--color-grey-25);

    p {
        font-size: 2rem !important;
    }
    div {
        background: var(--color-grey-25);
    }
`
const Item = styled.div`
    padding: 0 0 3rem 4rem;
    background-color: var(--color-grey-25);

    a {
        font-size: var(--text-size-sm);
    }
`
const mobile_accordion_header = {
    borderTop: '1px solid var(--color-grey-26)',
    borderBottom: 'none',
    padding: '0',
    margin: '0 2rem',
    backgroundColor: 'var(--color-grey-25)',
    boxShadow: 'none',
}
const mobile_accordion_header_about = Object.assign({}, mobile_accordion_header)

const Footer = () => {
    mobile_accordion_header_about.borderTop = 'none'
    const { show_cookie_banner } = React.useContext(LocationContext)

    return (
        <StyledFooter has_banner_cookie={show_cookie_banner}>
            <Container>
                <StyledGrid>
                    <DerivLogoWrapper>
                        <Logo />
                    </DerivLogoWrapper>
                    <LinksWrapper>
                        <Show.Desktop>
                            <Flex jc="space-between">
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('ABOUT')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/about#story">{localize('Our story')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/about#leadership">
                                            {localize('Our leadership')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/partners">
                                            {localize('Partnership programmes')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/why-choose-us">
                                            {localize('Why choose us?')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/contact-us">{localize('Contact us')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/careers">{localize('Careers')}</Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('TRADE')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/dtrader">{localize('DTrader')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/dbot">{localize('DBot')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/dmt5">{localize('DMT5')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link
                                            to="trading"
                                            is_smarttrader_link
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {localize('SmartTrader')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('TRADE TYPES')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/trade-types/margin">
                                            {localize('Margin trading')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/trade-types/options">{localize('Options')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/trade-types/multiplier">
                                            {localize('Multipliers')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('MARKETS')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/markets#forex">{localize('Forex')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/markets#synthetic">
                                            {localize('Synthetic indices')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/markets#stock">{localize('Stock indices')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/markets#commodities">
                                            {localize('Commodities')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('LEGAL')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/regulatory">
                                            {localize('Regulatory information')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/terms-and-conditions">
                                            {localize('Terms and conditions')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/responsible-trading">
                                            {localize('Secure and responsible trading')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('PARTNER')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/partners/affiliate-ib/">
                                            {localize('Affiliates and IBs')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/partners/payment-agent">
                                            {localize('Payment agents')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('RESOURCES')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/help-centre">{localize('Help centre')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/payment-methods">
                                            {localize('Payment methods')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                            </Flex>
                        </Show.Desktop>
                        <Show.Mobile>
                            <MobileAccordion>
                                <Accordion>
                                    <AccordionItem
                                        header={localize('ABOUT')}
                                        arrow_thin
                                        header_style={mobile_accordion_header_about}
                                    >
                                        <Item>
                                            <Link to="/about/#story">{localize('Our story')}</Link>
                                        </Item>
                                        <Item>
                                            <Link to="/about/#leadership">
                                                {localize('Our leadership')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/partners">
                                                {localize('Partnership programmes')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/why-choose-us">
                                                {localize('Why choose us?')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/contact-us">{localize('Contact us')}</Link>
                                        </Item>
                                        <Item>
                                            <Link to="/careers">{localize('Careers')}</Link>
                                        </Item>
                                    </AccordionItem>
                                    <AccordionItem
                                        header={localize('TRADE')}
                                        arrow_thin
                                        header_style={mobile_accordion_header}
                                    >
                                        <Item>
                                            <Link to="/dtrader">{localize('DTrader')}</Link>
                                        </Item>
                                        <Item>
                                            <Link to="/dbot">{localize('DBot')}</Link>
                                        </Item>
                                        <Item>
                                            <Link to="/dmt5">{localize('DMT5')}</Link>
                                        </Item>
                                        <Item>
                                            <Link
                                                to="trading"
                                                is_smarttrader_link
                                                external="true"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {localize('SmartTrader')}
                                            </Link>
                                        </Item>
                                    </AccordionItem>
                                    <AccordionItem
                                        header={localize('TRADE TYPES')}
                                        arrow_thin
                                        header_style={mobile_accordion_header}
                                    >
                                        <Item>
                                            <Link to="/trade-types/margin">
                                                {localize('Margin trading')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/trade-types/options">
                                                {localize('Options')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/trade-types/multiplier">
                                                {localize('Multipliers')}
                                            </Link>
                                        </Item>
                                    </AccordionItem>
                                    <AccordionItem
                                        header={localize('MARKETS')}
                                        arrow_thin
                                        header_style={mobile_accordion_header}
                                    >
                                        <Item>
                                            <Link to="/markets#forex">{localize('Forex')}</Link>
                                        </Item>
                                        <Item>
                                            <Link to="/markets#synthetic">
                                                {localize('Synthetic indices')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/markets#stock">
                                                {localize('Stock indices')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/markets#commodities">
                                                {localize('Commodities')}
                                            </Link>
                                        </Item>
                                    </AccordionItem>
                                    <AccordionItem
                                        header={localize('LEGAL')}
                                        arrow_thin
                                        header_style={mobile_accordion_header}
                                    >
                                        <Item>
                                            <Link to="/regulatory">
                                                {localize('Regulatory information')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/terms-and-conditions">
                                                {localize('Terms and conditions')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/responsible-trading">
                                                {localize('Secure and responsible trading')}
                                            </Link>
                                        </Item>
                                    </AccordionItem>
                                    <AccordionItem
                                        header={localize('PARTNER')}
                                        arrow_thin
                                        header_style={mobile_accordion_header}
                                    >
                                        <Item>
                                            <Link to="/partners/affiliate-ib/">
                                                {localize('Affiliates and IBs')}
                                            </Link>
                                        </Item>
                                        <Item>
                                            <Link to="/partners/payment-agent">
                                                {localize('Payment agents')}
                                            </Link>
                                        </Item>
                                    </AccordionItem>
                                    <AccordionItem
                                        header={localize('RESOURCES')}
                                        arrow_thin
                                        header_style={mobile_accordion_header}
                                    >
                                        <Item>
                                            <Link to="/help-centre">{localize('Help centre')}</Link>
                                        </Item>
                                        <Item>
                                            <Link to="/payment-methods">
                                                {localize('Payment methods')}
                                            </Link>
                                        </Item>
                                    </AccordionItem>
                                </Accordion>
                            </MobileAccordion>
                        </Show.Mobile>
                    </LinksWrapper>
                    <Disclaimer>
                        <div>
                            <Show.Eu>
                                <DisclaimerParagraph>
                                    <Localize translate_text="Products offered on Deriv.com are not available to clients residing in the EU and are accessible on Binary.com." />
                                </DisclaimerParagraph>
                            </Show.Eu>
                        </div>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="In the EU, financial products are offered by Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>view licence</0>)."
                                components={[
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/regulatory/Deriv_Investments_(Europe)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="Outside the EU, financial products are offered by Deriv (SVG) LLC, Hinds Building, Kingstown, St Vincent and the Grenadines; Deriv (V) Ltd, Govant Building, Port Vila, P.O. Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (<0>view licence</0>); Deriv (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (<1>view licence</1>); and Deriv (FX) Ltd, Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (<2>view licence</2>)."
                                components={[
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/regulatory/Deriv_(V)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                    <StaticAsset
                                        key={1}
                                        target="_blank"
                                        href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                    <StaticAsset
                                        key={2}
                                        target="_blank"
                                        href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            {localize(
                                "This website's services are not made available in certain countries including the USA, Canada, and Hong Kong, or to persons below 18.",
                            )}
                        </DisclaimerParagraph>
                        <RiskWarning>
                            <Show.Desktop>
                                <DisclaimerParagraph no_margin="true">
                                    <Localize
                                        translate_text="<1>RISK WARNING:</1> The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading.</0>"
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/responsible-trading/"
                                            />,
                                            <strong key={1} />,
                                        ]}
                                    />
                                </DisclaimerParagraph>
                            </Show.Desktop>
                            <Show.Mobile>
                                <DisclaimerParagraph
                                    no_margin="true"
                                    style={{ marginBottom: '1rem' }}
                                >
                                    <strong>{localize('RISK WARNING')}</strong>
                                </DisclaimerParagraph>
                                <DisclaimerParagraph no_margin="true">
                                    <Localize
                                        translate_text="The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading.</0>"
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/responsible-trading/"
                                            />,
                                        ]}
                                    />
                                </DisclaimerParagraph>
                            </Show.Mobile>
                        </RiskWarning>
                    </Disclaimer>
                    <Copyright>
                        <CopyrightIc width="16px" />
                        <Text ml="0.4rem">{localize('2020 Deriv | All rights reserved')}</Text>
                    </Copyright>
                    <SocialWrapper>
                        <ExternalLink
                            href="https://www.facebook.com/derivdotcom/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook />
                        </ExternalLink>
                        <ExternalLink
                            href="https://twitter.com/derivdotcom"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter />
                        </ExternalLink>
                        <ExternalLink
                            href="https://www.instagram.com/deriv_official/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                        </ExternalLink>
                        <ExternalLink
                            href="https://www.linkedin.com/company/derivdotcom/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </ExternalLink>
                    </SocialWrapper>
                </StyledGrid>
            </Container>
        </StyledFooter>
    )
}

export default Footer
