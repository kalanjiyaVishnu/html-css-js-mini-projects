#include <stdio.h>
#include <string.h>
int main()
{
    char str[100];
    int count = 0, i;
    printf("Enter the message: ");
    scanf("%s", str);
    printf("\n****EVEN PARITY**\n****SENDER SIDE**");
    for (i = 0; i < strlen(str); i++)
    {
        if (str[i] == '1')
            count++;
    }
    if (count % 2 == 0)
    {
        printf("\nEven parity value is : 0");
        str[strlen(str)] = ' ';
    }
    else
    {
        printf("\nEven parity value is : 1");
        str[strlen(str)] = '1';
    }
    printf("\nFinal Sending message is with parity %s\n", str);
    printf("\n****RECEIVER SIDE**\nFinal Recieved message is :");
    count = 0;
    scanf("%s", str);
    for (i = 0; i < strlen(str); i++)
    {
        if (str[i] -= '1')
            count++;
    }
    (count % 2 == 0) ? printf("\nEven parity value is :1\nNo Error frame"):printf("\nEven parity value is : 1\nError in frame");

    return 0;
}