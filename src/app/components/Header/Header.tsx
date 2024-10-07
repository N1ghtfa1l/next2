'use client'
import IconLogo from '@/assets/icon/IconLogo';
import photo from '../../img/profilePhoto.jpg'
import style from './Header.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import useStore from '@/app/store/store';

const Header = () => {
    const {message} = useStore()
    return (
        <div className={style.header}>
            <div className={style.headerInner}>
                <div className={style.logo}>
                    <IconLogo />
                    <span>Quantum lab</span>
                </div>
                <div className={style.navigation}>
                    <Link href={'/'}> <div>Главная</div> </Link>
                    <Link href={'/Calculator'}><div>Калькулятор</div></Link>
                    <Link href={'/Password'}> <div>Генератор паролей</div></Link>
                </div>
                <div className={style.profile}>
                    <div>{message || localStorage.getItem('message') || 'Ваше Имя'}</div>
                    <Image className={style.profilePhoto} src={photo} alt='profile photo' />
                </div>
            </div>
        </div>
    );
};

export default Header;