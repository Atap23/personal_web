import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import componentStyles from './home.scss';
import avatarImage from '../../assets/images/avatarImage.jpg';

export default function Home(props) {
    const StyledAvatar = withStyles({ img: { objectPosition: '0 30%' } })(Avatar);

    return <div id="home">
        <div id="home-titulo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Typography color="primary" variant="h4" >
                {'Un poco sobre mí...'}
            </Typography>
            {/* <StyledAvatar style={{ width: 175, height: 175, display: 'inline-block' }} alt="Antonio Alvarez - Foto Perfil" src={avatarImage} /> */}
        </div>
    </div>;
};