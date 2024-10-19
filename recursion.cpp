#include <iostream>
using namespace std;

void numList(int n){
    
    if(n==0) {
        return;
    } 

// Tail recurssive Method 
    cout<<n<<endl;

    numList(n-1);

// Head recurssive Method
    // numList(n-1);

    // cout<<n<<endl;

        
}


int main(){
    
    int n;
    cin >> n;

    numList(n);

    return 0;

}