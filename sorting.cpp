#include <iostream>
using namespace std;

void selectionSort(int arr[],int n){

    

    for (int i = 0; i <n; i++)
    {
        int mainIndex = i;

        for (int j = i+1; j < n; j++)
        {
            if(arr[j] < arr[mainIndex])
                mainIndex = j;
        }
        
        swap(arr[mainIndex],arr[i]);
    }
    
}

int main(){

    int arr[6] = {1,2,5,3,8,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr,n);    
    for(int i = 0;i<n;i++){
        cout<< arr[i] << " ";
    }

}