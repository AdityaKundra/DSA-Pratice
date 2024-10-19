#include <stdio.h>
#include <string.h>

#include <stdio.h>
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr;
    printf("%d\n", *(p + 5));
    return 0;
}
