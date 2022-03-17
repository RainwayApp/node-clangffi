// Regular union:
typedef union JustUnion
{
    int a;
    char b;
} JustUnion;

// Tagged union:
typedef enum RainwayInput_Tag
{
    IDK,
    GAMEPAD,
    MOUSE
} RainwayInput_Tag;
typedef struct GamepadReport_Body
{
    const char *text;
} GamepadReport_Body;
typedef struct MouseAbsolute_Body
{
    int x;
    int y;
} MouseAbsolute_Body;
typedef struct RainwayInput
{
    RainwayInput_Tag tag;
    union
    {
        GamepadReport_Body GAMEPAD_REPORT;
        MouseAbsolute_Body MOUSE_ABSOLUTE;
    };
} RainwayInput;
