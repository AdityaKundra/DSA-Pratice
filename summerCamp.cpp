#include <iostream>
#include <stdio.h>

using namespace std;

int main(){

    // int *p,i;
    // p = new int[5];
    // int count = 5;
    
    // for (int i = 0; i < count; i++)
    // {
    //     cout << "Enter a number: ";
    //     cin >> *p;
    //     p+=1;
    // }

    // p+=5;

    // for (int i = 0; i < count; i++)
    // {
    //     cout << *p;
    //     p+=1;
    // }

    int a[5], *b[5];
    int count = 5;

    for (int i = 0; i < count; i++)
    {
        cout << "Enter a number: ";
        cin >> a[i];
        b[i] = &a[i];
    }

    cout << "value of array using pointers of array 'b'" << endl;

    for (int i = 0; i < count; i++)
    {
        cout << *b[i] << endl;
    }

    // char a[5], *b[5];
    // int count = 5;
    // b[0]=&a[0];
    // cout << "Enter a string"<< endl;
    // gets(*b);
    // puts(*b);
    // return 0;
}