// Color naming based on http://chir.ag/projects/name-that-color/
const pallette = {
    'bermuda-gray' : '#778CA3',
    'blue-bayoux'  : '#525F7F',
    'link-water'   : ' #F4F7FC',
    'prussian-blue': '#00234B',
    'royal-blue'   : '#624DE3',
    mercury        : '#E5E5E5',
    mystic         : '#EAEDF3',
    pippin         : '#FFE8DF',
    white          : '#FFFFFF',
    zircon         : '#F9FAFF',
};

const colors = {
    background     : pallette['link-water'],
    buttonBgColor  : pallette['royal-blue'],
    buttonTextColor: pallette.zircon,
    default        : pallette['blue-bayoux'],
    header         : pallette.white,
    highlight      : pallette['royal-blue'],
    primary        : pallette['link-water'],
    secondary      : pallette['bermuda-gray'],
    separator      : pallette.mystic,
    tableFooter    : pallette.zircon,
    tableRow       : pallette.white,
    textColor      : pallette['prussian-blue'],
    ...pallette,
};

export default colors;
