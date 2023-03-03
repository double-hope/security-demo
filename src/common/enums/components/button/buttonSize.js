const ButtonSizeEnum = {
    LARGE: 'large',
    DEFAULT: 'default',
    SMALL: 'small',
    EXTRA_SMALL: 'extra small',
}

const SizeToRadius = {
    [ButtonSizeEnum.LARGE]: '30px',
    [ButtonSizeEnum.DEFAULT]: '30px',
    [ButtonSizeEnum.SMALL]: '20px',
    [ButtonSizeEnum.EXTRA_SMALL]: '20px',
}

export { ButtonSizeEnum, SizeToRadius };