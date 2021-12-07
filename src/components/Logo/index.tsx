import { Box, Hidden, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import InnoWingIcon from 'src/assets/InnoWing-Icon.jpg';

const LogoWrapper = styled(Box)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Link)(
  () => `
        width: 42px;
        transform: scale(.07);
`
);

const LogoTextWrapper = styled(Link)(
  ({ theme }) => `
        padding-left: ${theme.spacing(4)};
        display: flex;
        flex-direction: row;
        text-decoration: none;
`
);

const PlusSign = styled(Box)(
  ({ theme }) => `
        background: ${theme.palette.success.main};
        color: ${theme.palette.success.contrastText};
        padding: ${theme.spacing(0, 0.4)};
        margin-bottom: ${theme.spacing(2)};
        border-radius: ${theme.general.borderRadiusSm};
        text-align: center;
        display: inline-block;
        line-height: 1;
`
);

const LogoText = styled(Box)(
  ({ theme }) => `
        font-size: ${theme.typography.pxToRem(20)};
        font-weight: ${theme.typography.fontWeightBold};
        padding-right: ${theme.spacing(0.2)};
        color: ${theme.palette.common.black};
`
);

function Logo() {


  return (
    <LogoWrapper>
      <LogoSignWrapper to="/overview">
        <img src={InnoWingIcon} />
      </LogoSignWrapper>
      <Hidden smDown>
        <LogoTextWrapper to="/overview">
          <LogoText>INNO</LogoText>
          <PlusSign>+</PlusSign>
        </LogoTextWrapper>
      </Hidden>
    </LogoWrapper>
  );
}

export default Logo;
