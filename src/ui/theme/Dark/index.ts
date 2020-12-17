const pallette = {
    'gray-blue'   : '#8492A6',
    'royal-blue'  : '#624DE3',
    'yankees-blue': '#1F2D3D',
    charcoal      : '#3C4858',
    clouds        : '#ecf0f1',
    gunmetal      : '#273444',
    white         : '#FFFFFF',
    zircon        : '#F9FAFF',
};

const colors = {
    background     : pallette['yankees-blue'],
    buttonBgColor  : pallette['royal-blue'],
    buttonTextColor: pallette.zircon,
    default        : pallette.gunmetal,
    header         : pallette.charcoal,
    highlight      : pallette['royal-blue'],
    primary        : pallette.charcoal,
    secondary      : pallette.clouds,
    separator      : pallette.zircon,
    tableFooter    : pallette.zircon,
    tableRow       : pallette['gray-blue'],
    textColor      : pallette.clouds,
    ...pallette,
};

export default colors;
