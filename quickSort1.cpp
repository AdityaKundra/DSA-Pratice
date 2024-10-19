#include <iostream>
#include <array>
using namespace std;

int partation(int arr[], int s, int e){

    int pivot = arr[s];

    int index = 0;

    for(int i = s+1; i<=e; i++){
        if(arr[i]<=pivot){
            index++;
        }
    }

    int pivotIndex = s + index;

    // Placing Pivot at right position

    swap(arr[pivotIndex], arr[s]);

    // Sorting Left & Right part of array from pivot index
    int i = s, j = e; 

    while(i < pivotIndex && j > pivotIndex){

        while(arr[i] <= pivot){
            i++;
        }

        while(arr[j] >= pivot){
            j--;
        }

        if(i < pivotIndex && j > pivotIndex){
            swap(arr[i++],arr[j--]);
        }

    }

    return pivotIndex;

}


void quickSort(int arr[], int s, int e){

    if(s>=e)
        return;

    // Partation of  of arrar
    int p = partation(arr, s, e);

    // Left side sort
    quickSort(arr, 0, p-1);

    // Right side sort
    quickSort(arr,p+1,e);

}


int main(){

    int arr[] = {4,1,3,5,9,7,2,6,8};
    
    int n = 9;

    quickSort(arr,0,n-1);

    for(int i = 0; i<n;i++){
        cout << arr[i]<<" ";
    }
    cout << endl;

    return 0 ;

}