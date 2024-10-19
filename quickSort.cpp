#include <iostream>
#include <array>
using namespace std;

int partation(int arr[], int p, int q){
    int i = p;
    
    int pivot = arr[p];

    for(int j = i+1; j<q+1;j++){
        
        if (arr[j] < pivot ){
    
            i++;
    
            swap(arr[i], arr[j]);
    
        }
    }
    
    swap(arr[i], arr[p]);  

    return i;  
}

void quickSort(int arr[], int p, int q){

    if(p<q){
        
        int mid = partation(arr,p,q);

        quickSort(arr,p,mid-1);
        
        quickSort(arr,mid+1,q);

    }
}

int main(){

    int arr[] = {1,2,5,3,8,5};
    
    int n = 6;

    quickSort(arr,0,n-1);

    for(int i = 0; i<n;i++){
        cout << arr[i]<<" ";
    }
    cout << endl;

    return 0 ;

}