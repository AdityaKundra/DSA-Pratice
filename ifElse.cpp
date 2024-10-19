#include <iostream>
using namespace std;

int main(){
    char inpt;

    cin >> inpt;

    int ascii = inpt;

    if(ascii >= 65 && ascii <= 90){
        cout << "Upper Case" << endl;
    }
    else if(ascii >= 48 && ascii <= 57){
        cout << "Number" << endl;
    }
    else if(ascii >= 97 && ascii <= 122){
        cout << "Lower Case" << endl;
    }
    else {
        cout << "What is This!!" << endl;
    }
}